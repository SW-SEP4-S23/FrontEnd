
async function fetchData(dataName, startDate, endDate, setData, setServerFail) {
    const url = `https://cloud-app-byi2ujnffa-ez.a.run.app/environment/${dataName}`
    
    if (startDate !== undefined && endDate !== undefined) {
      url += `?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    }
    
    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(jsonData)
    if (response.ok) {
        setData({name: dataName, value: jsonData})
    }
    else {
      setServerFail(true)
      setData([])
    }
  } export default fetchData