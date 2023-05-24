export default async function postBatch(setData) {
    const response = await fetch(
        `https://cloud-app-byi2ujnffa-ez.a.run.app/stock/batch`
    );
    
    const data = await response.json();
    if (response.ok) {
        setData(data)
      }
      else {
        alert("Server fejl, prøv igen senere.")
      }
    }  