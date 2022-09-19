import { useState } from "react";


const RoomComponent=()=>{

    const [data,setData]=useState([{RoomId:null,Name:"",IsAvailable:'',charge:null,WardId:null}]);

   
  async function handleAddRoom(event){
    event.preventDefault();
//    console.log(data);
  const response = await fetch(
    process.env.REACT_APP_API + "/Room",
    {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)

    }
  )
  // console.log(response);
//   props.handleNewDoc();
}




    return(

       
        <form>
        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='wardId'>WardId</label>
            <input type='number' id='wardId' onChange={(e)=>setData({...data,WardId:parseInt(e.target.value)})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onChange={(e)=>setData({...data,Name:e.target.value})} />
          </div>
          <div className='form-control'>
            <label htmlFor='namIsAvailablee'>Availablity</label>
            <input type='text' id='IsAvailable' onChange={(e)=>setData({...data,IsAvailable:e.target.value})} />
          </div>
          <div className='form-control'>
            <label htmlFor='charge'>Charge</label>
            <input type='number' id='charge' onChange={(e)=>setData({...data,charge:parseInt(e.target.value)})}/>
          </div>
          <div className='form-control'>
            <label htmlFor='WardId'>WardId</label>
            <input type='number' id='WardId' onChange={(e)=>setData({...data,WardId:parseInt(e.target.value)})}/>
          </div>
          <button onClick={handleAddRoom}>Add New Ward</button>
        </div>
      </form>
    )

};

export default RoomComponent;