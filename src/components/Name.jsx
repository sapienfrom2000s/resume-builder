export default function Name({ handleChange, value }){
  return(
    <>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" value={ value } 
    onChange={(event) => handleChange(event.target.value)} required  />
    </>
  ) 
}

