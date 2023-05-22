
async function fetchData({dataName, startDate, endDate, setData, setServerFail}) {
    let url = `https://cloud-app-byi2ujnffa-ez.a.run.app/environment`
    
    if (dataName !== "" && dataName !== undefined) {
      url += `/${dataName}`
    }


    if (startDate !== undefined && endDate !== undefined) {
      url += `?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
    }
    const response = await fetch(url)
    console.log(response)

    const jsonData = await response.json()
    console.log(jsonData)
    if (response.ok) {
        setData(jsonData)
    }
    else {
      setServerFail(true)
      setData([])
    }
  } export default fetchData