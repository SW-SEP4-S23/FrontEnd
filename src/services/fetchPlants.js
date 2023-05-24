async function fetchPlants(setPlants)
{
    const response = await fetch(
        'https://cloud-app-byi2ujnffa-ez.a.run.app/stock/species'
    );

    const data = await response.json();
    if (response.ok){
        setPlants(data)
    }
    else {
        console.log("Server fejl, prøv igen senere.")
      }

} export default fetchPlants