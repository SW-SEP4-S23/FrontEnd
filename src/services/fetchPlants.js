async function fetchPlants(setPlants)
{
    setPlants([
        {
            id: 1,
            plantName: "Tomat",
            optimalCo2: 400,
            optimalHumidity: 50,
            optimalTemp: 20,
            stock: 0
        },
        {
            id: 2,
            plantName: "Basillikum",
            optimalCo2: 400,
            optimalHumidity: 50,
            optimalTemp: 20,
            stock: 0
        },
        {
            id: 3,
            plantName: "Agurk",
            optimalCo2: 400,
            optimalHumidity: 50,
            optimalTemp: 20,
            stock: 0
        },
        {
            id: 4,
            plantName: "Gullerod",
            optimalCo2: 400,
            optimalHumidity: 50,
            optimalTemp: 20,
            stock: 0
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