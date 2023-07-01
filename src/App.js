import { Routes, Route } from "react-router-dom";
import useStore from "./modules/store";
import AdminHomePage from './pages/admin/Home.page';
import AdminUsersPage from './pages/admin/Users.page';
import AdminReservationPage from './pages/admin/Reservation.page';
import AdminRecordWritePage from './pages/admin/RecordWrite.page';
import HomePage from './pages/home/Home.page';
import LoginPage from './pages/auth/Login.page';
import RegisterPage from './pages/auth/Register.page';
import ProfilePage from './pages/auth/Profile.page';
import RecordPage from './pages/record/Record.page';
import RecordDetailPage from './pages/record/Detail.page';
import RecordModifyPage from './pages/record/Modify.page';
import ReservationPage from './pages/reservation/Reservation.page';
import TestPage from './pages/Test';
import './App.css';

function App() {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/*" element={<NotFoundPage />} /> */}
      {currentUser.id === "" ? (
        <>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/record/:id" element={<RecordPage />} />
          <Route path="/record/detail/:id" element={<RecordDetailPage />} />
          <Route path="/record/detail/:id/modify" element={<RecordModifyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </>
      )}
      {currentUser.isAdmin && (
        <>
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/users/:username" element={<AdminUsersPage />} />
          <Route path="/admin/reservation" element={<AdminReservationPage />} />
          <Route path="/admin/record/:id" element={<AdminRecordWritePage />} />
        </>
      )}
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
