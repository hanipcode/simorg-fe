import DashboardHeader from '../src/components/DashboardHeader';
import Sidebar from '../src/components/Sidebar';

function Dashboard() {
  return (
    <div className="page dashboard-page">
      <Sidebar />
      <div className="page__container">
        <DashboardHeader />
        <div className="dashboard-page__content-container">
          <div className="dashboard-page__heading-container">
            <h1 className="headline dashboard-page__heading">
              Selamat Datang, Sulaiman
            </h1>
          </div>
          <div className="dashboard-page__content-group">
            <div className="alert">
              <i className="alert__icon" data-eva="alert-circle-outline" />
              <p className="alert__text">
                Batas Waktu Pendaftaran MIM : 3 Hari Lagi
              </p>
            </div>
            <div className="alert alert--warning">
              <i className="alert__icon" data-eva="alert-circle-outline" />
              <p className="alert__text">
                Batas Waktu Pendaftaran MIM : 3 Hari Lagi
              </p>
            </div>
            <div className="alert alert--danger">
              <i className="alert__icon" data-eva="alert-circle-outline" />
              <p className="alert__text">
                Batas Waktu Pendaftaran MIM : 3 Hari Lagi
              </p>
            </div>
            <div className="alert alert--success">
              <i className="alert__icon" data-eva="alert-circle-outline" />
              <p className="alert__text">Selamat, anda telah berhasil</p>
            </div>
          </div>
          <div className="dashboard-page__content-group dashboard-page__content-group--row">
            <div className="dashboard-page__summary summary">
              <h5 className="summary__heading">Total kader</h5>
              <p className="summary__count">5000</p>
            </div>
            <div className="dashboard-page__summary summary">
              <h5 className="summary__heading">Total Cabang</h5>
              <p className="summary__count">5</p>
            </div>
            <div className="dashboard-page__summary summary">
              <h5 className="summary__heading">Total Komisariat</h5>
              <p className="summary__count">60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
