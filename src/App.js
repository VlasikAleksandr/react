
import React, {lazy, Suspense} from 'react';
import './App.css';
import HeaderContainet from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
// import DialogsContainer from './components/Dialogs/DiologsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DiologsContainer'));

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainet />
        <Nav />
        <div className='app-wrapper-content'>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/musik' element={<Musik />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter >
  );
}
export default App;
