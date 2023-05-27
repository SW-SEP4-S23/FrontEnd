import '../css/PlantManagement.css';
import PlantContainer from '../components/PlantContainer';
import PlantRegister from '../components/PlantRegister';
import React, { useState, useEffect } from 'react';
import registerPlant from '../services/registerPlant';
import editPlant from '../services/editPlant';
import plantFormInputValidation from '../utils/plantFormInputValidation';
import StockTable from '../components/StockTable';
import fetchPlants from '../services/fetchPlants';
import postBatch from '../services/postBatch';
import fetchBathes from '../services/fetchBatches';
import Logbook from '../components/Logbook';
import fetchLogs from '../services/fetchLogs';
//import ServerFail from "../components/ServerFail";

export default function PlantManagement() {

  const [isOkBoxVisible, setIsVisible] = useState(false);
  const [state, setState] = useState({ plantName: "", optimalTemp: "", optimalHumidity: "", optimalCo2: "", stock: "", });
  const [formToggle, setFormToggle] = useState(false);
  const [errors, setErrors] = useState({ plantName: "", optimalTemp: "", optimalHumidity: "", optimalCo2: "", stock: "", });
	const [plantOptions, setPlantOptions] = useState([]);
	const [formTitle, setFormTitle] = useState('');
	const [data, setData] = useState([]);
  const [mode, setMode] = useState(null);
  const [plantSpecies, setPlantSpecies] = useState([]);
	const [batches, setBatches] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
  const [isLogbookOpen, setIsLogbookOpen] = useState(false);
	//const [serverFail, setServerFail] = useState([]);

  useEffect(() => {
    setFilteredData(data);
    setPlantOptions(data)
  }, [data]);



  function onChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === "plantName") {
      const filteredOptions = plantOptions.filter((plant) =>
        plant.plantName.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredOptions.length > 0) {
        const selectedPlant = filteredOptions.find(
          (plant) => plant.plantName.toLowerCase() === value.toLowerCase()
        );

        setState((prevState) => ({
          ...prevState, [name]: value, optimalTemp: selectedPlant ? selectedPlant.optimalTemp : "", optimalHumidity: selectedPlant ? selectedPlant.optimalHumidity : "", optimalCo2: selectedPlant ? selectedPlant.optimalCo2 : "", stock: selectedPlant ? selectedPlant.stock : "",
        }));
      } else {
        setState((prevState) => ({
          ...prevState, [name]: value, optimalTemp: "", optimalHumidity: "", optimalCo2: "", stock: "",
        }));
      }
    } else {
      setState((prevState) => ({
        ...prevState, [name]: value,
      }));
    }
  }


  function onSubmit(e) {
    e.preventDefault();

    const response = plantFormInputValidation(state);

    if (Object.keys(response).length !== 0) {
      setErrors(response);
      return;
    }

    if (mode === "register") {
      //registerPlant(state);
      setData((prevState) => [...prevState, {id:22, plantName: state.plantName, optimalTemp: state.optimalTemp, optimalHumidity: state.optimalHumidity, optimalCo2: state.optimalCo2, stock: state.stock}]);
    } else if (mode === "edit") {
      //editPlant(state);
      setData((prevState) => prevState.map((plant) => {
        if (plant.plantName === state.plantName) {
          return {plantName: state.plantName, optimalTemp: state.optimalTemp, optimalHumidity: state.optimalHumidity, optimalCo2: state.optimalCo2, amount: state.stock };
        }
        return plant;
      }));
    }

    setState({
      plantName: "", optimalTemp: "", optimalHumidity: "", optimalCo2: "", stock: "",
    });
  }

  function openForm(buttonType) {
    setMode(buttonType);
    setFormToggle(true);

    const formTitle =
      buttonType === "register" ? "Registrer Plante" : "Rediger Plante";
    setFormTitle(formTitle);
  }

  function closeForm() {
    setFormToggle(false);
  }

  /*useEffect(() => {
	async function fetchData() {
	  const options = await fetchPlants();
	  setPlantOptions(options);
	}
	fetchData();
  }, []);*/


	useEffect(() => {
		fetchPlants(setPlantSpecies);
	}, []);
  useEffect(() => {
    fetchBathes(setBatches);
  }, [plantSpecies]);
  useEffect(() => {
    setData(batches.map((batch) => {
      const plant = plantSpecies.find((plant) => plant.plantName === batch.plantName);
      return ({id: batch.id ,plantName: plant.plantName, optimalTemp: plant.optimalTemp, optimalHumidity: plant.optimalHumidity, optimalCo2: plant.optimalCo2, stock: batch.amount})
    }));
  }, [batches]);

  function onSearch(value) {
    const result = data.filter((item) => {
      return item.plantName.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(result);
  }

function onAmountChange(value, id) {
	const newData = data.map((item) => {
		if (item.id === id) {
			item.stock = value;
		}
		return item;
	});
	setData(newData);
}

const [logbookData, setLogbookData] = useState([
  {date: "2021-02-05", message: "Plante oprettet" },
  {date: "2021-05-06", message: "Plante vandet" },
  {date: "2021-08-07", message: "Plante har insekter" },
  {date: "2021-09-08", message: "Plante har frugt" },
  {date: "2021-010-09", message: "Plante er død" },]);
function openLogbook(id) {
  setIsLogbookOpen(true);
  fetchLogs(id, setLogbookData);
}

function logNewMessage(message) {
  setLogbookData((prev) => [...prev, {date: "2023-05-25", message: message}]);
}
  /*useEffect(() => {
    async function fetchData() {
      const options = await fetchPlants();
      setPlantOptions(options);
    }
    fetchData();
    }, []);*/

  return (
    <>
      <div className="plant-management-container top-container">
        <PlantContainer data={filteredData} onButtonClick={openForm} onSearch={onSearch} onAmountChange={onAmountChange} openLogbook={openLogbook}/>
      </div>
        <div>
          <PlantRegister
            mode={mode}
            formTitle={formTitle}
            filteredOptions={plantOptions}
            onChange={onChange}
            state={state}
            onSubmit={onSubmit}
            errors={errors}
            closeForm={closeForm}
            toggleForm={formToggle}
          />
        </div>
        {isLogbookOpen ? <Logbook setIsLogbookOpen={setIsLogbookOpen} logMessages={logbookData} logNewMessage={logNewMessage} httpResponseCode={"200"} isOkBoxVisible={isOkBoxVisible} setIsVisible={setIsVisible}/> : null}
    </>
  );
}
