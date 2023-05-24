import "../css/PlantManagement.css";
import "../css/PlantContainer.css"
import "../css/Data.css"
import StockTable from "./StockTable";

function PlantContainer({ onButtonClick, data, onSearch }) {
  return (
    <>
      <div id="PlantCard">
        <div id="PlantHeader">
          <h2 id="plant-container-header"> Plantebeholdning</h2>
          <div id="PlantSearch">
            <input
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Søg efter plante.."
            ></input>
            <button className="databutton">Søg</button>
            </div>
            <button className="databutton" id="PlantEdit" onClick={() => onButtonClick("edit")}>
              Rediger
            </button>
          
        </div>
        <div id="PlantData">
          <StockTable data={data} />
        </div>
        <div id="PlantFooter">
          <button id="PlantReg" className="databutton" onClick={() => onButtonClick("register")}>
            REGISTRER PLANTE
          </button>
        </div>
      </div>
    </>
  );
}
export default PlantContainer;
