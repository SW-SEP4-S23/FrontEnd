import "../css/PlantManagement.css"
import fetchPlants from "../services/fetchPlants";
import React, { useState, useEffect } from "react";
import StockTable from "../components/StockTable";
import postBatch from "../services/postBatch";
//import ServerFail from "../components/ServerFail";

export default function PlantManagement(){
  const [data, setData] = useState([]);
  //const [serverFail, setServerFail] = useState([]);

  useEffect(() => {
    fetchPlants(setData)
  },[]);

  function onSubmit(id){
    const filteredItem = data.filter((item) => item.id === id)[0];
    postBatch(filteredItem)
    
  }

  function onChange(id, value){
    const newData = data.map((item) => {
      if(item.id === id){
        item.amount = value
      }
      return item
    })
    setData(newData)
  }
  

    return (
        <>
<div id = "PlantCard">
<div id = "PlantHeader">
    <h1> Plantebeholdning</h1>
    <div  id = "PlantSearch"><textarea placeholder="Søg efter plante.."></textarea> 
    <button>Søg</button></div>

</div>
<div id = "PlantData" >
<StockTable 
data = {data}
onChange={onChange}
onSubmit={onSubmit}
/>
</div>
<div id = "PlantFooter">
<button id = "PlantReg">REGISTRER PLANTE</button>
</div>
</div>

<div id = "Planteformel">
    
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
      <input type="submit" value = "Tilføj"/>

    </form>

</div>
</>
    )


    
}