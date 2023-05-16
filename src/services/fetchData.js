async function fetchData(dataName, startDate, endDate, setData) {
    if (endDate === undefined || startDate === undefined) {
        return
    }

    const response = await fetch(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    )
    const jsonData = await response.json()
    console.log(jsonData)
    if (response.ok) {
        setData(jsonData)
    }
    else {
      console.log("Server fejl, prøv igen senere.")
        setData([])
    }
  } export default fetchData