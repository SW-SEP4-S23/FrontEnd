import axios from 'axios';

export default async function registerPlant(state) {
// TODO: Implement function to contact API and register plant
alert(state.plantName)

// POST request using axios
const element = document.querySelector('#patch-request .date-updated'); 
axios.post('https://testapi.jasonwatmore.com/invalid-url', state)     
.then(response => element.innerHTML = response.data.updatedAt )     
.catch(error => {         
    element.parentElement.innerHTML = `Error: ${error.message}`;         
    console.error('There was an error!', error);
 });
}