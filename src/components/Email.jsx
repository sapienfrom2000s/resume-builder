export default function Email({ handleChange, value }){
  return(
    <>
      <label for="email">Email</label>
      <input type="email" id="email" value={ value }
      onChange={(event) => handleChange(event.target.value)} required />
    </>
  )
}
