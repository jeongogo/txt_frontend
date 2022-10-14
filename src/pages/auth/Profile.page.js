import React from 'react'
import Header from '../../components/common/Header'
import ProfileContainer from '../../containers/auth/Profile.container';
import Footer from '../../components/common/Footer';

const ProfilePage = () => {
  return (
    <>
      <Header />
      <ProfileContainer />
      <Footer />
    </>
  )
}

export default ProfilePage