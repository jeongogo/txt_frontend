import React from 'react'
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import AdminHeader from '../../components/admin/Header';
import AdminUsers from '../../components/admin/Users';

const UsersContainer = () => {
  const getUsers = async () => {
    const { data } = await client.get('/api/admin/users');
    return data;
  }

  const users = useQuery("users", getUsers);

  return (
    <>
      <AdminHeader />
      <AdminUsers users={users} />
    </>
  )
}

export default UsersContainer