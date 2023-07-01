import { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import client from "../../lib/api/client";
import Header from '../../components/admin/Header';
import Users from '../../components/admin/Users';
import Loader from '../../components/common/Loader';

const UsersContainer = () => {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const { data } = await client.get('/api/admin/users');
      setUsers(data.users);
    } catch (e) {
      alert(e);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    const getSearchByUsername = async () => {
      setIsLoading(true);
      try {
        const { data } = await client.post('/api/admin/users/search', { name: username })
        setUsers(data.users);
      } catch (e) {
        alert(e);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    if (username) {
      getSearchByUsername();
    } else {
      getUsers();
      setSearchName('');
    }
  }, [username]);

  return (
    <>
      <Header />
      {isLoading
        ?
          <Loader />
        :
          <Users users={users} searchName={searchName} setSearchName={setSearchName} />
      }
    </>
  )
}

export default UsersContainer