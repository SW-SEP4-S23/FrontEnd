import { useState } from "react"
import Logbook from "../components/Logbook"
import "../css/PlantManagement.css"


export default function PlantManagement() {

  const [logMessages, setLogMessages] = useState([]);

  function getLogMessages(){
    //fetch messages here, and save in array
    //setLogMessages(fetch.....)
  }

  function logNewMessage(inputValue){
    //post(inputvalue).... /stock/species/{name}/log
  }

  return (
    <>
      <div className="plant-management-container">
        {/*       <div id="PlantCard">
        <div id="PlantHeader">
          <h1> Plantebeholdning</h1>
          <div id="PlantSearch"><textarea placeholder="Søg efter plante.."></textarea>
            <button>Søg</button></div>

        </div>
        <div id="PlantData">
          <p> Med </p>
        </div>
        <div id="PlantFooter">
          <button id="PlantReg">REGISTRER PLANTE</button>
        </div>
      </div>

      <div id="Planteformel">

        <form>
          <h3>Registrer Plante</h3>
          <label>Plantenavn
            <input type="text" />
          </label>
          <label>Optimal temperatur
            <input type="number" />
          </label>
          <label>Optimal luftfugtighed
            <input type="number" />
          </label>
          <label>Optimal CO2
            <input type="number" />
          </label>
          <label>Lagerbeholdning
            <input type="number" />
          </label>
          <input type="submit" value="Tilføj" />

        </form> 
      </div>*/}

        <Logbook logMessages={logMessages} logNewMessage={logNewMessage}/>
      </div>
    </>
  )



}