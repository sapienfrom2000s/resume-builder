export default function Name({ handleChange, value }){
  return(
    <div class='name'>
      <label for="name">Name</label><br/>
      <input type="text" id="name" name="name" value={ value } 
    onChange={(event) => handleChange(event.target.value)} required  /><br/>
    </div>
  ) 
}

