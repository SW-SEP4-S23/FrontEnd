import { useEffect, useState } from "react";
import Data from "../components/Data";
import dummyData from '../dummyData.json'

export default function Information() {
    const [data, setData] = useState([])
    const [dataName, setDataName] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [filter, setFilter] = useState("")

    let dataArray = []


    //henter bare lige noget data
     async function logJSONDataTemperature() {
        const response = await fetch("https://cloud-app-byi2ujnffa-ez.a.run.app/temperature?startDate=2023-04-01T00:00:00.000Z&endDate=2023-05-30T00:00:00.000Z");
        const jsonData = await response.json();
        console.log(jsonData);
      } 
    
    useEffect(() => {
        setData(`https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=2023-04-01T00:00:00.000Z&endDate=2023-05-30T00:00:00.000Z`)
        //setData(`https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?${startDate}&${endDate}`)
        //setData(dummyData.measurements)
        logJSONDataTemperature()
    }, [dataName])

    return (
        <>
            <div className="dataContainer">
                <Data data={data} setDataName={setDataName} setStartDate={setStartDate} setEndDat={setEndDate}/>
            </div>
        </>
    )
}