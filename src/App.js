import StaffComponent from './components/staff/StaffComponent';
import OpdPatientComponent from './components/Patient/OpdPatientComponent';
import PatientListComponent from './components/Patient/PatientListComponent';
import ShowRoomWardComponent from './components/RoomWard/ShowRoomWardComponent';
import { useState } from 'react';



function App() {
  const [shownStaff,setshownStaff]=useState(false);
  const [shownPatient,setShownPatient]=useState(false);
  const [showWardRoom,setShowWardRoom]=useState(false);
  


const handleWardRoom=()=>{
  setShownPatient(false);
  setshownStaff(false);
  setShowWardRoom(current=>!current);
  

} 


  const handleStaff=()=>{
    setShownPatient(false);
    setShowWardRoom(false);
    setshownStaff(current=>!current);

  }

  const handlePatient=()=>{
    setshownStaff(false);
    setShowWardRoom(false);

    setShownPatient(current=>!current);
  }

  return (
    <div className="app">

      <button onClick={handleStaff}>
Staff
      </button>

      <button onClick={handlePatient}>
Patient
      </button>
      <button onClick={handleWardRoom}>
Ward/Room
      </button>
      <div>
      {shownStaff && <StaffComponent/>}

      {shownPatient && <PatientListComponent/>}

      {showWardRoom && <ShowRoomWardComponent/>}

      </div>

    </div>
  );
}

export default App;
