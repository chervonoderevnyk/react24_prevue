import React, {FC, useEffect, useState} from 'react';

import './App.css';
import IUser from './model/IUser';
import UserComponent from './components/user/UserComponent';

const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(value => {
                const usersArray = value.users;
                setUsers(usersArray);
            });

        return () => {
            console.log('end');
        }
    }, []);

    const [userId, setUserId] = useState<number>(0)

    const clickHandler = (id:number) => {
        setUserId(id)
        console.log('.');
    }

  return (
      <>
          {
              users.map(
                  ({ firstName, id, lastName, age}, index) =>
                  <UserComponent
                      key={index}
                      id={id}
                      firstName={firstName}
                      lastName={lastName}
                      age={age}
                      clickHandler={clickHandler}
                  />)
          }
          <h2>{userId}</h2>
      </>
  );
}

export default App;
