export default function (plantId) {
    return [
        { id: plantId, date: "2021-02-05", message: "Plante oprettet" },
        { id: plantId, date: "2021-05-06", message: "Plante vandet" },
        { id: plantId, date: "2021-08-07", message: "Plante har insekter" },
        { id: plantId, date: "2021-09-08", message: "Plante har frugt" },
        { id: plantId, date: "2021-010-09", message: "Plante er død" },]


    /*return fetch(`http://localhost:3001/api/logs/${plantId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        */
}