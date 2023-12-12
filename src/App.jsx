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
    <ul>
    <li class='logo'>ResumeBuilder</li>
    <div class='nav-right'>
    <li>Editor</li>
    <li>Preview</li>
    </div>
    </ul>
    <hr/>
    <div class='content'>
    <h2 class='heading'>Personal Info</h2>
    <div class='row '>
    <Name handleChange={ handleNameChange } value={ name } />
    <Email handleChange={ handleEmailChange } value={ email } />
    </div>
    <div class='row  single-item'>
    <Phone handleChange={ handlePhoneChange } value={ phone } />
    <div/>
    </div>
    <div class='row toggler'>
    <button onClick={ triggerEducationFields }>Add Education</button>
    { education.map((education) => <Education add={ education } handleChange={ handleEducationChange } handleDelete={ handleEducationDelete }  key={ education.id } /> ) }<br/>
    </div>
    <div class='row toggler'>
    <button onClick={ triggerWorkFields }>Add Work</button>
    { work.map((work) => <Work add={ work } handleChange={ handleWorkChange } handleDelete={ handleWorkDelete }  key={ work.id } /> ) }<br/>
    </div>
    </div>
    </>
  )
}

export default App
