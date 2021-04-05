import DashboardHeader from '../src/components/DashboardHeader';
import DatePicker from '../src/components/Datepicker';
import Input from '../src/components/Input';
import Select from '../src/components/Select';
import Sidebar from '../src/components/Sidebar';
import useUserData from '../src/hooks/useUserData';

function Dashboard() {
  useUserData();
  return (
    <div className="page dashboard-page profile-page">
      <Sidebar />
      <div className="page__container">
        <DashboardHeader />
        <div className="dashboard-page__content-container">
          <div className="dashboard-page__heading-container">
            <h1 className="headline dashboard-page__heading">Profil Anda</h1>
          </div>
          <div className="content-block content-block--full content-block--l-p">
            <form className="form">
              <div className="flex-row">
                <div className="image-field profile-page__image-field">
                  <label htmlFor="avatar-upload">
                    <img
                      className="image-field__preview"
                      src="https://i.pravatar.cc/500?u=sulaiman"
                    />
                  </label>
                  <input
                    className="image-field__file-input"
                    id="avatar-upload"
                    name="avatar-upload"
                    type="file"
                  />
                  <div className="image-field__controls">
                    <div className="image-field__controls-icon-container">
                      <i
                        data-eva="home-outline"
                        className="image-field__controls-icon"
                      />
                    </div>
                    <div className="image-field__controls-icon-container">
                      <i
                        data-eva="home-outline"
                        className="image-field__controls-icon"
                      />
                    </div>
                  </div>
                </div>
                <fieldset className="fieldset fieldset--horizontal fieldset--2-column">
                  <Input
                    name="full_name"
                    label="Nama Lengkap"
                    subClass="fieldset__field"
                  />
                  <Select
                    label="Jenis Kelamin"
                    name="gender"
                    options={[
                      { label: 'Laki-Laki', value: 'Laki-Laki' },
                      { label: 'Perempuan', value: 'Perempuan' },
                    ]}
                  />
                  <Input
                    name="birthplace"
                    label="Tempat Lahir"
                    subClass="fieldset__field"
                  />
                  <DatePicker
                    name="birthdate"
                    label="Tanggal Lahir"
                    subClass="fieldset__field"
                  />
                  <Input
                    name="address"
                    label="Alamat asal"
                    subClass="fieldset__field"
                  />
                  <Input
                    name="origin_address"
                    label="Alamat Sekarang"
                    subClass="fieldset__field"
                  />
                  <Input
                    name="phone_number"
                    label="No. Telp/HP"
                    subClass="fieldset__field"
                  />
                  <Input
                    name="email"
                    label="Alamat Email"
                    subClass="fieldset__field"
                  />
                  <Select
                    label="Golongan Darah"
                    name="blood_type"
                    options={[
                      { label: 'O', value: 'O' },
                      { label: 'A', value: 'A' },
                      { label: 'AB', value: 'AB' },
                      { label: 'B', value: 'B' },
                    ]}
                  />
                  <Input
                    name="university"
                    label="Universitas"
                    subClass="fieldset__field"
                  />
                  <Input
                    name="faculty"
                    label="Fakultas"
                    subClass="fieldset__field"
                  />
                  <Input
                    name="major"
                    label="Jurusan"
                    subClass="fieldset__field"
                  />
                </fieldset>
              </div>
              <div className="image-field profile-page__image-field">
                <label className="label">Tanda Tangan</label>
                <label htmlFor="avatar-upload">
                  <img
                    className="image-field__preview"
                    src="http://localhost:8000/img/ttd.png"
                  />
                </label>
                <input
                  className="image-field__file-input"
                  id="avatar-upload"
                  name="avatar-upload"
                  type="file"
                />
                <div className="image-field__controls">
                  <div className="image-field__controls-icon-container">
                    <i
                      data-eva="home-outline"
                      className="image-field__controls-icon"
                    />
                  </div>
                  <div className="image-field__controls-icon-container">
                    <i
                      data-eva="home-outline"
                      className="image-field__controls-icon"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
