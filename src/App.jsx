import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './components/Name.jsx'
import Email from './components/Email.jsx'
import Phone from './components/Phone.jsx'
import Education from './components/Education.jsx'
import Work from './components/Work.jsx'

let educationIndex = 0
let workIndex = -99 

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [education, setEducation] = useState([])
  const [work, setWork] = useState([])

  function handleNameChange(newValue){
    setName(newValue)
  }

  function handleEmailChange(newValue){
    setEmail(newValue)
  }

  function handlePhoneChange(newValue){
    setPhone(newValue)
  }

  function handleEducationChange(newValue, id){
    const updatedEducation = education.map((education) => {
      if (education.id === id)
      return({id: id, institute: {name: newValue.name, startDate:newValue.startDate, endDate: newValue.endDate}})
      else
	return education
    }) 
    setEducation(updatedEducation)
  }

  function handleEducationDelete(id){
    const updatedEducation = education.filter((education)=> education.id !== id) 
    setEducation(updatedEducation)
  }

  function triggerEducationFields(){
    setEducation([...education, {id: educationIndex, institute: {name: '', startDate: '', endDate:''}}])
    educationIndex++
  }

  function handleWorkChange(newValue, id){
    const updatedWork = work.map((work) => {
      if (work.id === id)
      return({id: id, company: {name: newValue.name, startDate:newValue.startDate, endDate: newValue.endDate, summary: newValue.summary}})
      else
	return work
    }) 
    setWork(updatedWork)
  }

  function handleWorkDelete(id){
    const updatedWork = work.filter((work)=> work.id !== id) 
    setWork(updatedWork)
  }

  function triggerWorkFields(){
    setWork([...work, {id: workIndex, company: {name: '', startDate: '', endDate:'', summary: ''}}])
    workIndex++
  }


  return (
    <>
    <Name handleChange={ handleNameChange } value={ name } />
    <Email handleChange={ handleEmailChange } value={ email } />
    <Phone handleChange={ handlePhoneChange } value={ phone } />
    <button onClick={ triggerEducationFields }>Add Education</button>
    { education.map((education) => <Education add={ education } handleChange={ handleEducationChange } handleDelete={ handleEducationDelete }  key={ education.id } /> ) }
    <button onClick={ triggerWorkFields }>Add Work</button>
    { work.map((work) => <Work add={ work } handleChange={ handleWorkChange } handleDelete={ handleWorkDelete }  key={ work.id } /> ) }
    </>
  )
}

export default App
