import React, {useState,useEffect} from "react";
import"./App.css";
import Axios  from  "axios"
function App()
{
  const[sname , setStudentName] = useState("");
  const[tech,setTechnology]= useState("");
  const[status,setStatus]= useState("");

  const submitReview =()=>
  {
    Axios.post('http://localhost:9001/aliens',
    {name:sname,
    tech: tech,
  sub:status}).then(()=>
  {
    alert("sucess");
  });
  };
return(
  <div ClassName = "App">
    <h1> CRUD Application Demo</h1>
    <div ClassName = "information">
      <label><b>Student name</b></label>
      <input 
      type ="text"
      name ="sname"
      onChange={(e)=>{
        setStudentName(e.target.value);
      }}
      required/>
      <label> <b>Technology</b></label>
      
      <input
          type ="text"
          name = "tech"
          onchange = {(e) =>{
            setTechnology(e.target.value);
          }}
          required/>
      <label> <b>Status</b></label>
      <input
          type ="text"
          name = "status"
          onchange = {(e) =>{
            setStatus(e.target.value);
          }}
          required/>
     <button onClick={submitReview}><b>Submit</b></button>
      </div>
</div>);
}
export default App;