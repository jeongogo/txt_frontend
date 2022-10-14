import React from 'react'
import Header from '../../components/common/Header';
import ReservationContainer from '../../containers/reservation/Reservation.container'
import Footer from '../../components/common/Footer';

const ReservationPage = () => {
  return (
    <>
      <Header />
      <ReservationContainer />
      <Footer />
    </>
  )
}

export default ReservationPage