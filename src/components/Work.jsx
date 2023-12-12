import { useState } from 'react';

export default function Work({add, handleChange, handleDelete}){

  function toggleEndDate(){
      let elementToToggle = document.getElementById("endDateWorkBox"); 

//    if (elementToToggle.style.display === "none") {
  //    elementToToggle.style.display = "block"; 
 //   } else {
   //   elementToToggle.style.display = "none";
  //  }
  }

  return(
    <div class='workFields content'>
    <div class='row'>
    <div class='box'>
      <label for="name">Company</label><br/>
      <input type="text" id="name" name="company" value={ add.company.name } onChange={(event) => handleChange({name: event.target.value, startDate: add.company.startDate, endDate: add.company.endDate, summary: add.summary}, add.id)} required />
    </div>
    <div class='box'>
      <label for="startDate">Start Date</label><br/>
      <input type="date" id="startDate" name="startDate" value={ add.company.startDate } onChange={(event) => handleChange({name: add.name, startDate: event.target.value, endDate: add.company.endDate, summary: add.summary}, add.id)} required />
    </div>
    </div>
    <div id='endDateWorkBox'>
    <div class='row'>
    <div class='box'>
      <label for="endDate">End Date</label><br/>
      <input type="date" id="endDate" name="endDate" value={ add.company.endDate } onChange={(event) => handleChange({name: add.name, endDate: event.target.value, startDate: add.company.endDate, summary: add.summary}, add.id)} required />
    </div>
    </div>
    </div>
    <div class='row'>
    <div class='box'>
    <input type="checkbox" onChange={ toggleEndDate }   name="currentWork" id={`currentWork${add.id}`} value="value" />
    <label for={`currentWork${add.id}`}>Currently working</label>
    </div>
    </div>
      <label for="summary">Summary</label>
      <textarea rows='6' cols='100' id="summary" name="company" value={ add.company.summary } onChange={(event) => handleChange({name: add.name, startDate: add.company.startDate, endDate: add.company.endDate, summary: event.target.value}, add.id)} required />
    <button id='deleteWork' onClick={()=> handleDelete(add.id) }>Delete</button>
    </div>
  )
}

