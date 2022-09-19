import { useState } from "react";



const OpdPatientComponent=()=>{
const [data,setData]=useState({"PatientId":0,"FirstName":"","LastName":"","MiddleName":"","Email":"","MobileNo":0,"Address":"","isAdmitted":null,"AgeType":"",'DateOfBirth':0,'Gender':'',"RoomId":0,"BillId":0,"AssignedDoctor":""});
const [isAdmitted,setisAdmitted]=useState(false);
const handleAdmit=(e)=>{
    e.preventDefault();
  
    setData({...data,isAdmitted:!isAdmitted})
    if(!isAdmitted){
        e.target.style.backgroundColor = "green"
        }
        else{
            e.target.style.backgroundColor= "#240370";
        }
    setisAdmitted(current=>!current);
  
}


async function handleAdd(event){
  event.preventDefault();
 console.log(data);
const response = await fetch(
  process.env.REACT_APP_API + "/Patient",
  {
    method: "POSt",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)

  }
)
// console.log(response);
// props.handleNewDoc();

}


const handleCalculate=(e)=>{
    e.preventDefault();
    console.log(data);
} 

const handleIPD=(e)=>{
    e.preventDefault();

    console.log(data);
} 
    return (
        <form>
          <div className='control-group'>
            <div className='form-control'>
              <label htmlFor='name'>Patient Id</label>
              <input type='number' id='PatientId' value={data.PatientId} onChange={(e)=>setData({...data,PatientId:parseInt(e.target.value)})}/>
            </div>
            <div className='form-control'>
              <label htmlFor='name'>First Name</label>
              <input type='text' id='firstname' value={data.FirstName} onChange={(e)=>setData({...data,FirstName:e.target.value})}/>
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Middle Name</label>
              <input type='text' id='middlename' value={data.MiddleName} onChange={(e)=>setData({...data,MiddleName:e.target.value})}/>
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Last Name</label>
              <input type='text' id='lastname' value={data.LastName} onChange={(e)=>setData({...data,LastName:e.target.value})}/>
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>E-Mail Address</label>
            <input type='text' id='mail' value={data.Email} onChange={(e)=>setData({...data,Email:e.target.value})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Mobile Number</label>
            <input type='number' id='mobile' value={data.MobileNo} onChange={(e)=>setData({...data,MobileNo:parseInt(e.target.value)})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Address</label>
            <input type='text' id='address' value={data.Address} onChange={(e)=>setData({...data,Address:e.target.value})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>DOB</label>
            <input type='text' id='dob' value={data.DateOfBirth} onChange={(e)=>setData({...data,DateOfBirth:e.target.value})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Gender</label>
            <input type='text' id='gender' value={data.Gender} onChange={(e)=>setData({...data,Gender:parseInt(e.target.value)})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Age Type</label>
            <input type='text' id='age' value={data.AgeType} onChange={(e)=>setData({...data,AgeType:e.target.value})}/>
          </div>
          <div>
    
            <button onClick={(e)=>handleAdmit(e)}>Admit To IPD</button>
          </div>
          <div >
            {isAdmitted?
            <div>
         <div className='form-control'>
         <label htmlFor='name'>Room Id</label>
         <input type='text' id='roomid' value={data.RoomId} onChange={(e)=>setData({...data,RoomId:e.target.value})}/>
       </div>
       {/* <div className='form-control'>
         <label htmlFor='name'>Bill Id</label>
         <input type='text' id='billid' value={data.BillId} onChange={(e)=>setData({...data,BillId:e.target.value})}/>
       </div> */}
       <div className='form-control'>
         <label htmlFor='name'>Doctor Assigned</label>
         <input type='text' id='doctorAssigned' value={data.AssignedDoctor} onChange={(e)=>setData({...data,AssignedDoctor:e.target.value})}/>
       </div>
       
       
<button onClick={e=>handleAdd(e)}>IPD</button>
       
       </div>
       
       :
            <button onClick={e=>handleCalculate(e)}>Calculate Bill</button>
        }
          </div>
        </form>
      );


};

export default OpdPatientComponent;