import CloseButton from "react-bootstrap/CloseButton";
import "../css/PlantManagement.css";
import { GrFormClose } from "react-icons/gr";

function PlantRegister({
  onSubmit,
  formTitle,
  filteredOptions,
  onChange,
  state,
  errors,
  toggleForm,
  closeForm,
  mode,
}) {
  
  return (
    <>
      {toggleForm && (
        <div id="Plantform">
          <CloseButton onClick={() => closeForm()}>
            <GrFormClose />
          </CloseButton>
          <form onSubmit={(e) => onSubmit(e)}>
            <h3>{formTitle}</h3>
            <label>
              Plantenavn
              <input
                type="text"
                id="plantName"
                name="plantName"
                value={state.plantName}
                onChange={onChange}
                list="plantOptions"
              />
              <datalist id="plantOptions">
                {filteredOptions.map((plant, index) => (
                  <option key={index} value={plant.plantName}>
                    {plant.plantName}
                  </option>
                ))}
              </datalist>
            </label>
            {errors?.plantName !== "" ? <p>{errors?.plantName}</p> : null}
            <label>
              Optimal temperatur
              <input
                type="number"
                onChange={(e) => onChange(e)}
                name="optimalTemp"
                value={state?.optimalTemp}
              />
            </label>
            {errors?.optimalTemp !== "" ? <p>{errors?.optimalTemp}</p> : null}
            <label>
              Optimal luftfugtighed
              <input
                type="number"
                onChange={(e) => onChange(e)}
                name="optimalHumidity"
                value={state?.optimalHumidity}
              />
            </label>
            {errors?.optimalHumidity !== "" ? (
              <p>{errors?.optimalHumidity}</p>
            ) : null}
            <label>
              Optimal CO2
              <input
                type="number"
                onChange={(e) => onChange(e)}
                name="optimalCo2"
                value={state?.optimalCo2}
              />
            </label>
            {errors?.optimalCo2 !== "" ? <p>{errors?.optimalCo2}</p> : null}
            <label>
              Lagerbeholdning
              <input
                type="number"
                onChange={(e) => onChange(e)}
                name="stock"
                value={state?.stock}
              />
            </label>
            {errors?.stock !== "" ? <p>{errors?.stock}</p> : null}
            <input
              type="submit"
              value={mode === "register" ? "Tilføj" : "Gem"}
            />
            {errors?.submit !== "" ? <p>{errors?.submit}</p> : null}
          </form>
        </div>
      )}
    </>
  );
}
export default PlantRegister;
