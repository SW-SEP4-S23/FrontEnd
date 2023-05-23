async function fetchThresholds(setThresholds, setServerFail) {
    const response = await fetch(
        `https://cloud-app-byi2ujnffa-ez.a.run.app/thresholds`
    )
    
    const data = await response.json()
    if (response.ok) {
        setThresholds(data)
      }
      else {
        setServerFail(true)
        setThresholds([])
      }
    } export default fetchThresholds