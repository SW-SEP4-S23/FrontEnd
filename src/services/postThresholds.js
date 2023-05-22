export default function postThresholds(thresholds, setServerFail, setHttpResponseCode) {
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ thresholds })
    };
    fetch('https://cloud-app-byi2ujnffa-ez.a.run.app/thresholds', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                setServerFail(true);
                return Promise.reject(error);
            }

            return { postId: data.id }
        })
        .catch(error => {
            setServerFail(true);
            setHttpResponseCode(500);
            console.error('There was an error!', error);
        });
}