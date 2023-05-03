import React, {useState, useEffect} from "react"
import GrafDisplay from "./GraphDisplay"
import DataTable from "./DataTable"
import TimeSelect from "./TimeSelect";

function DataContainer({data, dataName, setEndDate})
{
    const [displayType, setDisplayType] = useState("graf");

    return (
        <>
            <div className="displayContainer">
                <div className="displayToggle" >
                <button className={`databutton ` + (displayType === "graf" ? "highlighted" : "")} onClick={()=> setDisplayType("graf")}>Graf</button>
                <button className={`databutton ` + (displayType === "table" ? "highlighted" : "")} onClick={()=> setDisplayType("table")}>Table</button>
                </div>
                <TimeSelect setEndDate={setEndDate}/>
                {displayType === "graf" ? <GrafDisplay data={data} dataName={dataName}/> : <DataTable data={data} dataName={dataName}/>}
            </div>
        </>
    )
}  export default DataContainer
