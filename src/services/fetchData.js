async function fetchData(dataName, startDate, endDate, setData) {
    if (endDate === undefined || startDate === undefined) {
        return;
    }

    const response = await fetch(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=${endDate.toISOString()}&endDate=${startDate.toISOString()}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    if (response.ok) {
        setData(jsonData)
    }
    else {
      alert("Server error, please try again later")
    }
  } export default fetchData