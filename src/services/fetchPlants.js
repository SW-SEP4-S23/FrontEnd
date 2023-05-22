async function fetchPlants(setData) {

    const response = await fetch(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/$plants/`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    if (response.ok) {
        setData(jsonData)
    }
    else {
      alert("Server fejl, prøv igen senere.")
        setData([])
    }
  } export default fetchPlants