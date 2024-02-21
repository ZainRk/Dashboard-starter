import './App.css'
import MainDash from './components/Sidebar/MainDash/MainDash';
// import Sidebar from './components/Sidebar/Sidebar';
import RightSide from './components/RightSide/RightSide';
// import Category from './components/Category/Category';
import {Check} from './components/Check/Check';
 import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
 import {Courses} from './components/Courses';
//  import Calender from './components/Calender/Calender';
//  import Progress from './components/Progress/Progress';

//  import {Chats} from './components'
import {Final} from './components/Final';
import Chats from './components/Chats';
import Grades from './components/Grades';
import Schedule from './components/Schedule';
import Setting from './components/Setting';

function App() {
  return (
 
   <div className="App">
        <div className="AppGlass">
        {/* <Sidebar/> */}
        {/* <Category/> */}
        <Router>
          <Check/>
          {/* <Final/> */}
          <Routes>
             <Route exact path='/' element={<MainDash/>}/> 
            <Route path='/Courses' element={<Courses/>}/>
            <Route path='/Chats' element={<Chats/>}/>
            <Route path='/Grades' element={<Grades/>}/>
            <Route path='/Schedule' element={<Schedule/>}/>
            <Route path='/Setting' element={<Setting/>}/>
          </Routes>
        </Router>
        
        {/* <MainDash/> */}
        {/* <RightSide/> */}
     {/* <Calender/>
    <Progress/>   */}
        </div>
       
    </div>
   
 
  );
}

export default App;
