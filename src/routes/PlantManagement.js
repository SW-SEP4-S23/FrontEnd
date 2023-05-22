import { useState } from "react"
import Logbook from "../components/Logbook"
import "../css/PlantManagement.css"
import OkBox from "../components/OkBox";


export default function PlantManagement() {

  const [logMessages, setLogMessages] = useState([]);
  const [isOkBoxVisible, setIsVisible] = useState(false);
  const [httpResponseCode, setHttpResponseCode] = useState();
  const [plantName, setPlantName] = useState("");

  function getLogMessages() {
    //fetch messages here, and save in array
    //setLogMessages(fetch.....)
  }

  async function logNewMessage(inputValue) {
    const response = await fetch(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/stock/plants/${plantName}/logs?message=${inputValue}`
    );
    setHttpResponseCode(response.status);
    setIsVisible(true);
    console.log(response.status)
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

        <Logbook logMessages={logMessages} logNewMessage={logNewMessage} httpResponseCode={httpResponseCode} isOkBoxVisible={isOkBoxVisible} setIsVisible={setIsVisible} />
      </div>
    </>
  )



}