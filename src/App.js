import { Routes, Route } from "react-router-dom";
import useStore from "./modules/store";
import AdminHomePage from './pages/admin/Home.page';
import AdminUsersPage from './pages/admin/Users.page';
import AdminReservationPage from './pages/admin/Reservation.page';
import AdminRecordPage from './pages/admin/Record.page';
import HomePage from './pages/home/Home.page';
import LoginPage from './pages/auth/Login.page';
import RegisterPage from './pages/auth/Register.page';
import ProfilePage from './pages/auth/Profile.page';
import RecordPage from './pages/record/Record.page';
import ReservationPage from './pages/reservation/Reservation.page';
import './App.css';

function App() {
  const currentUser = useStore((state) => state.currentUser);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/*" element={<NotFoundPage />} /> */}
      {currentUser.id === ''
        ?
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reservation/:type" element={<LoginPage />} />
            <Route path="/profile" element={<LoginPage />} />
            <Route path="/record" element={<LoginPage />} />
          </>
        :
          <>
            <Route path="/login" element={<HomePage />} />
            <Route path="/register" element={<HomePage />} />
            <Route path="/reservation/:type" element={<ReservationPage />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </>
      }
      {currentUser.isAdmin
        &&
          <>
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/reservation" element={<AdminReservationPage />} />
            <Route path="/admin/record/:id" element={<AdminRecordPage />} />
          </>
      }
    </Routes>
  );
}

export default App;
