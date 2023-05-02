import { useEffect, useState } from "react";
import DataTabsDisplay from "../components/DataTabsDisplay";

export default function Information() {
    const [data, setData] = useState([])
    const [dataName, setDataName] = useState("")
/*  
    Følgende skal på ved de harcodede datoer, når vi har fået data korrekt ind i tables
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("") */

    //henter data pba. valgte tab
     async function getData() {
        const response = await fetch(`https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=2023-04-01T00:00:00.000Z&endDate=2023-05-30T00:00:00.000Z`);
        const jsonData = await response.json();
        setData(jsonData)
        console.log(jsonData);
      } 
    
    /*når dataName ændres, ift. hvilke tab man har trykket på, så rerenders siden, 
    og den korrekte data hentes*/
    useEffect(() => {
        getData()
    }, [dataName])

    return (
        <>
            <div className="dataContainer">
                <DataTabsDisplay data={data} setDataName={setDataName}/>
            </div>
        </>
    )
}