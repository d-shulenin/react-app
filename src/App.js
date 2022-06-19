import './App.css';
import Main from './components/Main/mainContainer';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Teachers from './components/Teachers/TeachersContainer';
import {Route, Routes} from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Schedule from './components/Schedule/Schedule'
import Contacts from './components/Contacts/contactsContainer';
import Profile from './components/Profile/Profile'

function App (props) {
  return (
    <div className="app-wrapper">
       <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
