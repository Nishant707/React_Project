import { useState } from "react";

const DoctorComponent = (props) => {
  
  const [data,setData]=useState({"DoctorId":0,"Name":"","Email":"","MobileNo":0,"Specialization":"","Fees":0,"Type":""});

  async function handleAdd(event){
    event.preventDefault();
   console.log(data);
  const response = await fetch(
    process.env.REACT_APP_API + "/Doctor",
    {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)

    }
  )
  // console.log(response);
  props.handleNewDoc();

  }

    return (
      <form>
        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>Doctor Id</label>
            <input type='number' id='docId' value={data.DoctorId} onChange={(e)=>setData({...data,DoctorId:parseInt(e.target.value)})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={data.Name} onChange={(e)=>setData({...data,Name:e.target.value})}/>
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
          <label htmlFor='name'>Specialization</label>
          <input type='text' id='specialization' value={data.Specialization} onChange={(e)=>setData({...data,Specialization:e.target.value})}/>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Fees</label>
          <input type='number' id='fees' value={data.Fees} onChange={(e)=>setData({...data,Fees:parseInt(e.target.value)})}/>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Type</label>
          <input type='text' id='type' value={data.Type} onChange={(e)=>setData({...data,Type:e.target.value})}/>
        </div>
        <div >
          <button onClick={handleAdd}>Add</button>
        </div>
      </form>
    );
  };
  
  export default DoctorComponent;