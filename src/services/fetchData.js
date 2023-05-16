//TODO: add abort controller to abort fetch if new fetch is called before the first one is done
//TODO: change error handling to handle different types of errors and display different messages

async function fetchData(dataName, startDate, endDate, setData) {
    if (endDate === undefined || startDate === undefined) {
        return;
    }

    const response = await fetch(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
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
  } export default fetchData