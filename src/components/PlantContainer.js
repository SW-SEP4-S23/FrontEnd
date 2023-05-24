import "../css/PlantManagement.css";
import StockTable from "./StockTable";

function PlantContainer({ onButtonClick, data, onSearch, onAmountChange, onAmountSubmit }) {
  return (
    <>
      <div id="PlantCard">
        <div id="PlantHeader">
          <h1> Plantebeholdning</h1>
          <div id="PlantSearch">
            <input
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Søg efter plante.."
            ></input>
            <button>Søg</button>
            <button id="PlantEdit" onClick={() => onButtonClick("edit")}>
              Rediger
            </button>
          </div>
        </div>
        <div id="PlantData">
          <StockTable data={data}
          onChange={onAmountChange} onSubmit={onAmountSubmit} />
        </div>
        <div id="PlantFooter">
          <button id="PlantReg" onClick={() => onButtonClick("register")}>
            REGISTRER PLANTE
          </button>
        </div>
      </div>
    </>
  );
}
export default PlantContainer;
