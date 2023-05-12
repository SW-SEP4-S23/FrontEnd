async function fetchThresholds(setThresholds) {
    const response = await fetch(
        `https://cloud-app-byi2ujnffa-ez.a.run.app/thresholds`
    );
    
    const data = await response.json();
    if (response.ok) {
        setThresholds(data)
      }
      else {
        alert("Server error, please try again later")
      }
    } export default fetchThresholds