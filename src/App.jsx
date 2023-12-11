import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './components/Name.jsx'
import Email from './components/Email.jsx'
import Phone from './components/Phone.jsx'
import Education from './components/Education.jsx'

let educationIndex = 0

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [education, setEducation] = useState([])

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

  return (
    <>
    <Name handleChange={ handleNameChange } value={ name } />
    <Email handleChange={ handleEmailChange } value={ email } />
    <Phone handleChange={ handlePhoneChange } value={ phone } />
    <button onClick={ triggerEducationFields }>Add Education</button>
    { education.map((education) => <Education add={ education } handleChange={ handleEducationChange } handleDelete={ handleEducationDelete }  key={ education.id } /> ) }
    </>
  )
}

export default App
