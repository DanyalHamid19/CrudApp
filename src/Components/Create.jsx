import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Employees from "./Employees";


export default function Create() {

const [id, setid] = useState('Undefined');
const [name, setname] = useState('Unknown');
const [age, setage] = useState('Unknown');

const navigate=useNavigate();


const handleSubmitButton=()=>{
Employees.push({id:id, name:name, age:age});
navigate("/");
}

  return (
    <>
      <div className="container mt-4">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Please enter the ID</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              onChange={(e)=>setid(e.target.value)}
            />
          </div>
          <br />

          <div class="form-group">
            <label for="formGroupExampleInput">Please enter the Name</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <br />

          <div class="form-group">
            <label for="formGroupExampleInput2">Please enter the Age</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              onChange={(e) => setage (e.target.value)}
            />
          </div>
        </form>
        <br />
        <br />

        <button type="submit" className="btn btn-primary" onClick={handleSubmitButton}>
          Submit
        </button>
      </div>
    </>
  );
}
