import React from 'react'
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import Header from '../../components/admin/Header';
import Users from '../../components/admin/Users';

const UsersContainer = () => {
  const getUsers = async () => {
    const { data } = await client.get('/api/admin/users');
    return data;
  }

  const users = useQuery("users", getUsers);

  return (
    <>
      <Header />
      <Users users={users} />
    </>
  )
}

export default UsersContainer