import React, { useState } from "react"
import TimeSelect from "./TimeSelect"
import DataTable from "./DataTable"
import DataGraph from "./DataGraph"

function DataContainer({ data, dataName, setStartDate }) {
    const [displayType, setDisplayType] = useState("graf")
    
    return (
        <>
            <div data-testid={`${dataName}-container`} className="displayContainer">
                <div className="displayToggle" >
                    <button id={`grafbutton`} className={`databutton ` + (displayType === "graf" ? "highlighted" : "")} onClick={() => setDisplayType("graf")}>Graf</button>
                    <button id={`tablebutton`} className={`databutton ` + (displayType === "table" ? "highlighted" : "")} onClick={() => setDisplayType("table")}>Tabel</button>
                </div>
                <TimeSelect setStartDate={setStartDate} />
                {displayType === "table" ? <DataTable data={data} dataName={dataName} /> : <DataGraph data={data} dataName={dataName} />}
            </div>
        </>
    )
} export default DataContainer
