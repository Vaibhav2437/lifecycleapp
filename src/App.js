import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Lifecycle from './conponent/Lifecycle';
import Users from './conponent/Users'
import Employee from './conponent/Employee';
import Userclass from './conponent/Usersclass';
import EmpClass from './conponent/EmpClass';
function App() {
  //const [show,setShow] = useState(true)
  return (
    <div className="App">
      
      <h1>Learn React</h1>
      {/* <button className='btn btn-danger' onClick={()=>setShow(!(show))}> Unmount The Comp</button>
      {
        show ? <Lifecycle/> : <div> </div>
      }
       */}
       {/* <Users/> */}
       {/* <Employee/> */}
       {/* <Userclass/> */}
       <EmpClass/>
    </div>
  );
}

export default App;
