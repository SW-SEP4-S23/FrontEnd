
export default async function postThresholds(dataName, maxValue, minValue, setIsVisible, setServerFail, setServerFailMessage) {
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "minValue": parseInt(minValue), "maxValue": parseInt(maxValue) })
    };

    await fetch(`https://cloud-app-byi2ujnffa-ez.a.run.app/environment/${dataName}/thresholds`, requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            
            console.log("minvalue = "+ minValue + " maxvalue = " + maxValue)

            if(response.ok)
            {
                setServerFailMessage([])
                setIsVisible(true)
                console.log("Posted succesfully")
            }
            // check for error response
            else {
                setServerFail(true)
                console.log("Error occured posting")
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            return { postId: data.id }
        })
        .catch(error => {
            console.error('Serverfejl', error);
            setServerFailMessage(error)
            console.log(error)
        }); 
}