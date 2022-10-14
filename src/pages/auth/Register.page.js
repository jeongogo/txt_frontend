import React from 'react'
import Header from '../../components/common/Header'
import RegisterContainer from '../../containers/auth/Register.container'
import Footer from '../../components/common/Footer';

const RegisterPage = () => {
  return (
    <>
      <Header />
      <RegisterContainer />
      <Footer />
    </>
  )
}

export default RegisterPage