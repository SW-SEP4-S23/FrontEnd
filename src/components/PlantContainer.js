import "../css/PlantManagement.css"

function PlantContainer({onButtonClick}){
return (
<>
<div id = "PlantCard">
<div id = "PlantHeader">
    <h1> Plantebeholdning</h1>
    <div  id = "PlantSearch"><textarea placeholder="Søg efter plante.."></textarea> 
    <button>Søg</button>
    <button id = "PlantEdit" onClick={() => onButtonClick("edit")}>Rediger</button></div>

</div>
<div id = "PlantData">

</div>
<div id = "PlantFooter">
<button id = "PlantReg" onClick={() => onButtonClick("register")}>REGISTRER PLANTE</button>
</div>
</div>
</>
)

} export default PlantContainer