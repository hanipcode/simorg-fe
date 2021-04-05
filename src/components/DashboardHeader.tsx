import useUserData from '../hooks/useUserData';

export default function DashboardHeader() {
  const { user, displayName, displayPhoto } = useUserData();
  console.log(user);
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__menu-container">
        <i data-eva="menu-outline" />
      </div>
      <div className="dashboard-header__profile-container">
        {displayPhoto && (
          <img
            className="dashboard-header__profile-picture"
            src="https://i.pravatar.cc/150?u=sulaiman"
          />
        )}
        <p className="dashboard-header__profile-name">
          Selamat Datang, {displayName}
        </p>
        <i data-eva="arrow-ios-downward-outline" />
      </div>
    </div>
  );
}
