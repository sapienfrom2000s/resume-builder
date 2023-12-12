export default function Email({ handleChange, value }){
  return(
    <div class='email'>
      <label for="email">Email</label><br/>
      <input type="email" id="email" value={ value }
      onChange={(event) => handleChange(event.target.value)} required /><br/>
    </div>
  )
}
