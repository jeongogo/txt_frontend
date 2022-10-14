import React from 'react'
import Header from '../../components/common/Header'
import LoginContainer from '../../containers/auth/Login.container'
import Footer from '../../components/common/Footer';

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer />
      <Footer />
    </>
  )
}

export default LoginPage