import React, {useState} from "react"
import TimeSelect from "./TimeSelect";
import DataTable from "./DataTable";

function DataContainer({data, dataName, setEndDate})
{
    const [displayType, setDisplayType] = useState("graf");
    //Hej fra Pernille og CO

    return (
        <>
            <div className="displayContainer">
                <div className="displayToggle" >
                <button className={`databutton ` + (displayType === "graf" ? "highlighted" : "")} onClick={()=> setDisplayType("graf")}>Graf</button>
                <button className={`databutton ` + (displayType === "table" ? "highlighted" : "")} onClick={()=> setDisplayType("table")}>Table</button>
                </div>
                <TimeSelect setEndDate={setEndDate}/>
                <DataTable data={data} dataName={dataName}/>
            </div>
        </>
    )
}  export default DataContainer
