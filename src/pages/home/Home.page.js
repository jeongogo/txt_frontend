import React from 'react'
import Header from '../../components/common/Header';
import HomeContainer from '../../containers/home/Home.container';
import Footer from '../../components/common/Footer';

const HomePage = () => {
  return (
    <>
      <Header theme='dark' />
      <HomeContainer />
      <Footer />
    </>
  )
}

export default HomePage