import ServerFail from "../components/serverFail";

export default async function postThresholds({ dataName, maxValue, minValue, setIsVisible, setServerFail}) {
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "minValue": minValue, "maxValue": maxValue })
    };

    await fetch(`https://cloud-app-byi2ujnffa-ez.a.run.app/environment/${dataName}/thresholds`, requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if(response.ok)
            {
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
        }); 
}