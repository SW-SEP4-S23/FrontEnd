import CloseButton from "react-bootstrap/CloseButton"
import "../css/PlantManagement.css"

function PlantRegister ({onSubmit, filteredList, onChange, state, errors, toggleForm, closeForm}){

  return (
  <>
  {toggleForm &&

<div id = "Plantform"> 
<CloseButton onClick={()=> closeForm()}></CloseButton>
<form onSubmit={(e) => onSubmit(e)}>
<h3>Registrer Plante</h3>
      <label>Plantenavn
        <input type="text" onChange={(e)=> onChange(e)} name="plantName" value={state?.plantName}/>
      </label>
        {errors?.plantName !=="" ? <p>{errors?.plantName}</p> : null}
      <label>Optimal temperatur
        <input type="number" onChange={(e)=> onChange(e)} name="optimalTemp" value={state?.optimalTemp}/>
      </label>
      {errors?.optimalTemp !=="" ? <p>{errors?.optimalTemp}</p> : null}
      <label>Optimal luftfugtighed
        <input type="number" onChange={(e)=> onChange(e)} name="optimalHumidity" value={state?.optimalHumidity}/>
      </label>
      {errors?.optimalHumidity !=="" ? <p>{errors?.optimalHumidity}</p> : null}
      <label>Optimal CO2
        <input type="number" onChange={(e)=> onChange(e)} name="optimalCo2" value={state?.optimalCo2}/>
      </label>
      {errors?.optimalCo2 !=="" ? <p>{errors?.optimalCo2}</p> : null}
      <label>Lagerbeholdning
        <input type="number" onChange={(e)=> onChange(e)} name="stock" value={state?.stock}/>
      </label>
      {errors?.stock !=="" ? <p>{errors?.stock}</p> : null}
      <input type="submit" value = "Tilføj"/>
      {errors?.submit !=="" ? <p>{errors?.submit}</p> : null}

    </form>

</div>
  }
</>
)} export default PlantRegister