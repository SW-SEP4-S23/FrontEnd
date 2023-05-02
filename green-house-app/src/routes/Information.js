import { useEffect, useState } from "react";
import Data from "../components/Data";
import dummyData from '../dummyData.json'

export default function Information() {
    const [data, setData] = useState([])
    const [dataName, setDataName] = useState("")
    const [filter, setFilter] = useState("")

    let dataArray = []
    
    useEffect(() => {
        setData(fetch(`ENDPOINTFROMCLOUD/${dataName}}`).then(res => res.json()))
        /*setData(dummyData.measurements)*/
    }, [dataName])

    return (
        <>
            <div className="dataContainer">
                <Data data={data} setDataName={setDataName}/>
            </div>
        </>
    )
}