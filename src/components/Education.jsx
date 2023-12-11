import { useState } from 'react';

export default function Education({add, handleChange}){
  return(
    <>
      <label for="name">Institute</label>
      <input type="text" id="name" name="institute" value={ add.institute.name } onChange={(event) => handleChange({name: event.target.value, startDate: add.institute.startDate, endDate: add.institute.endDate}, add.id)} required />
      <label for="startDate">Start Date</label>
      <input type="date" id="startDate" name="startDate" value={ add.institute.startDate } onChange={(event) => handleChange({name: add.name, startDate: event.target.value, endDate: add.institute.endDate}, add.id)} required />
      <label for="endDate">End Date</label>
      <input type="date" id="endDate" name="endDate" value={ add.institute.endDate } onChange={(event) => handleChange({name: add.name, endDate: event.target.value, startDate: add.institute.endDate}, add.id)} required />
    <input type="checkbox" name="currentInstitute" id="currentInstitute" value="value" />
    <label for="currentInstitute">I currently study here</label>

    </>
  )
}

