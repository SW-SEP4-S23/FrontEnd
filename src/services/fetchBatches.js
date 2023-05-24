export default async function fetchBatches(setData) {

    setData([
        {
            batchId: 1,
            speciesId: 1,
            amount: 20,
        },
        {
            batchId: 2,
            speciesId: 1,
            amount: 10,
        },
        {
            batchId: 3,
            speciesId: 2,
            amount: 14,
        },
        {
            batchId: 4,
            speciesId: 2,
            amount: 29,
        },
        {
            batchId: 5,
            speciesId: 3,
            amount: 21,
        },
        {
            batchId: 6,
            speciesId: 4,
            amount: 34,
        },
        {
            batchId: 7,
            speciesId: 4,
            amount: 8,
        }
    ])
    /*const response = await fetch(
        `https://cloud-app-byi2ujnffa-ez.a.run.app/stock/batch`
    );
    
    const data = await response.json();
    if (response.ok) {
        setData(data)
      }
      else {
        console.log("Server fejl, prøv igen senere.")
      }*/
    }  