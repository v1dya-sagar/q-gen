import './App.css';
import { Button, Input } from 'reactstrap';
import Titlebar from './jsx/titlebar';
import { useState } from 'react';

function App() {
  const [registerInfo,setRegisterInfo] = useState({username:"", password:"", dept:"", role:"", subject:""})


  const handleChange = (e)=>{
    const {name,value} = e.target;
    setRegisterInfo({...registerInfo,[name]:value});
    console.log(registerInfo)
  }

  const handleSubmit = (e)=>{
    console.log(registerInfo);
  }

  return (
    <div className="App">
      <div className='reg-main-box'>
        <Titlebar />
        <div className='reg-sub-box'>
          <form>
            <h2>REGISTER</h2>
            <Input className='reg-pg-input' type='text' name='username' placeholder='Username' onChange={handleChange}/>
            <Input className='reg-pg-input' type='password' name='password' placeholder='Password' onChange={handleChange} />
            <Input className='reg-pg-input' type='select' name='dept' placeholder='Department' onChange={handleChange}>
              <option>Department</option>
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Civil</option>
            </Input>
            <Input className='reg-pg-input' type='text' name='role' placeholder='Role' onChange={handleChange} >
              <option>HOD</option>
              <option>Professor</option>
            </Input>
            <Input className='reg-pg-input' type='text' name='subject' placeholder='Subject' onChange={handleChange} />
            <Button className='reg-pg-input' id='reg-pg-btn' onClick={handleSubmit} >Register</Button>
            <a href='/login'>Login</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
