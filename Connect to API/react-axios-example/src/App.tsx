import { useEffect, useState } from 'react';
import { User } from './models/user';
import { getUsers } from './random-user-api';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const populateUsers = async () => {
      try {
        var userResponse = await getUsers();
        setUsers(userResponse.results);
      } catch (e) {
        console.log(e);
      }
    }
    populateUsers();
  }, [])

  return (
    <>
      <h1>API Test</h1>
      {users.length > 0 ? 
        users.map((user, idx) => 
          <div key={idx}>{user.name.first} {user.name.last}</div>
        )
        : 'Loading...'}
    </>
  );
}

export default App;
