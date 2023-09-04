import './qbupload.css';
import { Button, Input } from 'reactstrap';
import Titlebar from '../jsx/titlebar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

function QBUpload() {
  const [qbInfo,setQbInfo] = useState({subject:"", chapter:""})
  const [qbFile, setQbFile] = useState();
  const navigate = useNavigate();


  const handleChange = (e)=>{
    const {name,value} = e.target;
    setQbInfo({...qbInfo,[name]:value});
    console.log(qbInfo)
  }

  const handleFileChange = (e)=>{
    setQbFile(e.target.files[0]);
}

 
  const handleSubmit = (e)=>{
    console.log("Yes")
    const formData = new FormData();
    formData.append('file', qbFile);
    axios
    .post('http://localhost:8003/uploadqb', formData)
    .then((response) => {
        console.log(response)
        // if(response.data.status === "" || response.data.status === "faulty"){
            navigate('/');
        // }
    })
    .catch((error) => {
        console.log(error);
    });
  }

  return (
    <div className="App">
      <div className='reg-main-box'>
        <Titlebar />
        <div className='reg-sub-box'>
          <form>
            <h2>Upload Question Bank</h2>
            <Input className='qb-pg-input' type='text' name='subject' placeholder='Subject' onChange={handleChange}/>
            <Input className='qb-pg-input' type='text' name='chapter' placeholder='Chapter' onChange={handleChange}/>
            <Input id='qb-pg-file' type='file' placeholder='Question Bank' onChange={handleFileChange}/>
            <Button className='qb-pg-input' id='qb-pg-btn' onClick={handleSubmit}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QBUpload;
