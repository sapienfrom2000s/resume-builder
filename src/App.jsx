import { useState } from 'react'
import './App.css'
import Name from './components/Name.jsx'
import Email from './components/Email.jsx'
import Phone from './components/Phone.jsx'
import Education from './components/Education.jsx'
import Work from './components/Work.jsx'
import Preview from './components/Preview.jsx'

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
    <li className='logo'>ResumeBuilder</li>
    <div className='nav-right'>
    <li onClick={() => console.log('hii')}>Editor</li>
    <li>Preview</li>
    </div>
    </ul>
    <div className='background'></div>
    <div className='content'>
    <h2 className='heading'>Personal Info</h2>
    <div className='row '>
    <Name handleChange={ handleNameChange } value={ name } />
    <Email handleChange={ handleEmailChange } value={ email } />
    </div>
    <div className='row  single-item'>
    <Phone handleChange={ handlePhoneChange } value={ phone } />
    <div/>
    </div>
    <div className='row toggler'>
    <button onClick={ triggerEducationFields }>Add Education</button>
    { education.map((education) => <Education add={ education } handleChange={ handleEducationChange } handleDelete={ handleEducationDelete }  key={ education.id } /> ) }<br/>
    </div>
    <div className='row toggler'>
    <button onClick={ triggerWorkFields }>Add Work</button>
    { work.map((work) => <Work add={ work } handleChange={ handleWorkChange } handleDelete={ handleWorkDelete }  key={ work.id } /> ) }<br/>
    </div>
    </div>
    <Preview name={ name } email={ email } phone={ phone } education={ education } work={ work } />
    </>
  )
}

export default App
