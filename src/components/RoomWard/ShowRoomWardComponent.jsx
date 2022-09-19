import { useState } from "react";
import RoomComponent from "./RoomComponent";
import WardComponent from "./WardComponent";
import ListComponent from "../ReusableComponent/ListComponent";



const ShowRoomWardComponent=()=>{

    const [wardData,setWardData]=useState([]);
    const [roomData,setRoomData]=useState([]);
    const [wardList,setWardList]=useState(false);
    const [roomList,setRoomList]=useState(false);
    const [wardForm,setWardForm]=useState(false);


    const addNewWard=()=>{
        setWardForm(current=>!current);
    }


    async function Roomlist(){
    
        const response = await fetch(process.env.REACT_APP_API+"/Room");
        const data = await response.json();
        setRoomData(data);
        // console.log(data);
        // console.log(docData);
        setRoomList(false);
        setWardList(current=>!current);
        }

        async function Wardlist(){
    
            const response = await fetch(process.env.REACT_APP_API+"/Ward");
            const data = await response.json();
            setWardData(data);
            // console.log(data);
            // console.log(docData);
            setRoomList(false);
            setWardForm(false);
            setWardList(current=>!current);
            
            }

    

    return (
        <div>
            <button onClick={Wardlist} >
                Ward List
            </button>
            <button   onClick={Roomlist}>
                Room List
            </button>
            {wardList && 
            <div>
                <div>
                <button onClick={addNewWard} >Add New Ward</button>
                </div>
                {!wardForm &&
                <div>
                <ListComponent data={wardData}/>
                </div>}
                </div> 
             }
            {wardForm && <WardComponent/>}

         
             {roomList && <RoomComponent data={roomData}/>}
        </div>
    )

};

export default ShowRoomWardComponent;