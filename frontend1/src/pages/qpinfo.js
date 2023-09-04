import './qpinfo.css';
import { Button, Input } from 'reactstrap';
import Titlebar from '../jsx/titlebar';
import { useState } from 'react';

function QPInfo() {
  const [qpInfo,setQpInfo] = useState({subject:"", chapter:"", qnumber:0})


  const handleChange = (e)=>{
    const {name,value} = e.target;
    setQpInfo({...qpInfo,[name]:value});
    console.log(qpInfo)
  }

  const handleSubmit = (e)=>{
    console.log(qpInfo);
  }

  return (
    <div className="App">
      <div className='qpinfo-main-box'>
        <Titlebar />
        <div className='qpinfo-sub-box'>
          <form>
            <h2>Question Paper Info</h2>
            <Input className='qpinfo-pg-input' type='text' name='subject' placeholder='Subject' onChange={handleChange}/>
            <Input className='qpinfo-pg-input' type='text' name='chapter' placeholder='Chapter' onChange={handleChange}/>
            <Input className='qpinfo-pg-input' type='number' name='qnumber' placeholder='No. of Questions' onChange={handleChange} />
            <Button className='qpinfo-pg-input' id='qpinfo-pg-btn' onClick={handleSubmit} >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QPInfo;
