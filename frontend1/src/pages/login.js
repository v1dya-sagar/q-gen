import './login.css';
import { Button, Input } from 'reactstrap';
import Titlebar from '../jsx/titlebar';
import { useState } from 'react';

function Login() {
  const [registerInfo,setRegisterInfo] = useState({username:"", password:"", role:""})


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
      <div className='log-main-box'>
        <Titlebar />
        <div className='log-sub-box'>
          <form>
            <h2>LOGIN</h2>
            <Input className='log-pg-input' type='text' name='username' placeholder='Username' onChange={handleChange}/>
            <Input className='log-pg-input' type='password' name='password' placeholder='Password' onChange={handleChange} />
            <Input className='log-pg-input' type='text' name='role' placeholder='Role' onChange={handleChange} />
            <Button className='log-pg-input' id='log-pg-btn' onClick={handleSubmit} >LOGIN</Button>
            <a href='/'>Register</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
