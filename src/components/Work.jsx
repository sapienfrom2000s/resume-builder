import { useState } from 'react';

export default function Work({add, handleChange, handleDelete}){

  function toggleEndDate(){
      let elementToToggle = document.getElementById("endDateWorkBox"); 

    if (elementToToggle.style.display === "none") {
      elementToToggle.style.display = "block"; 
    } else {
      elementToToggle.style.display = "none";
    }
  }

  return(
    <>
      <label for="name">Company</label>
      <input type="text" id="name" name="company" value={ add.company.name } onChange={(event) => handleChange({name: event.target.value, startDate: add.company.startDate, endDate: add.company.endDate, summary: add.summary}, add.id)} required />
      <label for="summary">Summary</label>
      <textarea id="summary" name="company" value={ add.company.summary } onChange={(event) => handleChange({name: add.name, startDate: add.company.startDate, endDate: add.company.endDate, summary: event.target.value}, add.id)} required />
      <label for="startDate">Start Date</label>
      <input type="date" id="startDate" name="startDate" value={ add.company.startDate } onChange={(event) => handleChange({name: add.name, startDate: event.target.value, endDate: add.company.endDate, summary: add.summary}, add.id)} required />
    <div id='endDateWorkBox'>
      <label for="endDate">End Date</label>
      <input type="date" id="endDate" name="endDate" value={ add.company.endDate } onChange={(event) => handleChange({name: add.name, endDate: event.target.value, startDate: add.company.endDate, summary: add.summary}, add.id)} required />
    </div>
    <input type="checkbox" onChange={ toggleEndDate }   name="currentWork" id={`currentWork${add.id}`} value="value" />
    <label for={`currentWork${add.id}`}>Currently working</label>
    <button id='deleteWork' onClick={()=> handleDelete(add.id) }>Delete</button>
    </>
  )
}

