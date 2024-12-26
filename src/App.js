import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterApp from './Counter/CounterApp';
import ButtonTask from './Task2/ButtonTask';
import LoginForm from './Task3/LoginForm';
import UserList from './Task4/UserList';
import DataFetcher from './Task6/DataFetcher';
import UserForm from './Task7/UserForm';
import Images from './Task8/Images';
import Wrap from './Task5/Wrap';

function App() {
  return (
    
    <div>
      <h1>Multi-Task Project</h1>
      <section>
        <h2>Task 1: Counter App</h2>
        <CounterApp />
      </section>
      <section>
        <h2>Task 2: Applying css</h2>
        <ButtonTask />

        </section>
        <section>
        <h2>Task 3: Login Form</h2>
        <LoginForm />
        </section>
        <section>
        <h2>Task 4 : fetch info from API</h2>
        <UserList />
        </section>
        <section>
        <h2>Task 6: DataFetcher</h2>
        <DataFetcher />
        </section>
        <section>
        <h2>Task 7: Form</h2>
        <UserForm />
        </section>
        <section>
        <h2>Task 8: Image</h2>
        <Images />
        </section>
        <section>
        <h2>Task 5: </h2>
        <Wrap />
        </section>
    </div>

  );
}

export default App;
