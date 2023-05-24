async function fetchPlants(setPlants)
{
    setPlants([
        {
            id: 1,
            name: "Tomat",
            optCo2: 400,
            optHumidity: 50,
            optTemp: 20,
            amount: 0
        },
        {
            id: 2,
            name: "Basillikum",
            optCo2: 400,
            optHumidity: 50,
            optTemp: 20,
            amount: 0
        },
        {
            id: 3,
            name: "Agurk",
            optCo2: 400,
            optHumidity: 50,
            optTemp: 20,
            amount: 0
        },
        {
            id: 4,
            name: "Gullerod",
            optCo2: 400,
            optHumidity: 50,
            optTemp: 20,
            amount: 0
        }])

    /*const response = await fetch(
        'https://cloud-app-byi2ujnffa-ez.a.run.app/stock/species'
    );

    const data = await response.json();
    if (response.ok){
        setPlants(data)
    }
    else {
        console.log("Server fejl, prøv igen senere.")
      }*/

} export default fetchPlants