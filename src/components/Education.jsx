import { useState } from 'react';

export default function Education({add, handleChange, handleDelete}){

  function toggleEndDate(){
      let elementToToggle = document.getElementById("endDateBox"); 

    // if (elementToToggle.style.display === "none") {
    //  elementToToggle.style.display = "block"; 
    // } else {
     // elementToToggle.style.display = "none";
   // }
  }

  return(
    <div class='educationFields content'>
    <div class='row'>
    <div class='box'>
      <label for="name">Institute</label><br/>
      <input type="text" id="name" name="institute" value={ add.institute.name } onChange={(event) => handleChange({name: event.target.value, startDate: add.institute.startDate, endDate: add.institute.endDate}, add.id)} required />
    </div>
    <div class='box'>
      <label for="startDate">Start Date</label><br/>
      <input type="date" id="startDate" name="startDate" value={ add.institute.startDate } onChange={(event) => handleChange({name: add.name, startDate: event.target.value, endDate: add.institute.endDate}, add.id)} required />
    </div>
    </div>
    <div id='endDateBox' class='row single-item'>
    <div class='box'>
      <label for="endDate">End Date</label><br/>
      <input type="date" id="endDate" name="endDate" value={ add.institute.endDate } onChange={(event) => handleChange({name: add.name, endDate: event.target.value, startDate: add.institute.endDate}, add.id)} required />
    </div>
    </div>
    <div class='row'>
    <div class='box check-box'>
    <input type="checkbox" onChange={ toggleEndDate }   name="currentInstitute" id={`currentInstitute${add.id}`} value="value" key={`educationCurrent${add.id}`} />
    <label for={`currentInstitute${add.id}`}>Currently studying</label>
    </div>
    </div>
    <button id='deleteEducation' key={`deleteEducation_${add.id}`} onClick={()=> handleDelete(add.id) }>Delete</button>
    </div>
  )
}

