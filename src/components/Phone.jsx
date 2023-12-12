export default function Phone({ handleChange, value }){
  return(
    <div class='phone'>
      <label for="phone">Phone</label><br/>
      <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(event) => handleChange(event.target.value)} required /><br/>
    </div>
  )
}
