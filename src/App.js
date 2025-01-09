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
import Dynamic from './Task9/Dynamic';
import Rout from './Task10/Rout';
import BlogFeed from './Task12/BlogFeed';
import Url from './Task13/Url';
import Component from './Task14/Component';
import Protect from './Task17/Protect';
import Shopping from './Task11/Shopping';
import Error from './Task18/Error';
import ThemeProvider from './Context/ThemeProvider';
import Wrap from './Task5/Wrap';
import Cloud from './Task15/Cloud';

function App() {
  return (
    <ThemeProvider>
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
        <h2>Task 5 : Theme</h2>
        <Wrap />
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
        <h2>Task 9:reusable component </h2>
        <Dynamic />
        </section>
        <section>
        <h2>Task 10:Routes </h2>
        <Rout />
        </section>
        <section>
        <h2>Task 11:Shopping cart </h2>
        <Shopping />
        </section>
        <section>
        <h2>Task 12:BlogFeed </h2>
        <BlogFeed />
        </section>
        <section>
        <h2>Task 13:Dropdown </h2>
        <Url />
        </section>
        <section>
        <h2>Task 14 : lazy </h2>
        <Component />
        </section>
        <section>
        <h2>Task 15 : cloudinary </h2>
        <Cloud />
        </section>
        <section>
          <h2>Task 17: protect</h2>
          <Protect />
        </section>
        <section>
          <h2>Task 18: error</h2>
          <Error />
        </section>
    </div>
    </ThemeProvider>
  );
}

export default App;
