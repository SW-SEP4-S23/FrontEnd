import React, { useState } from "react"
import TimeSelect from "./TimeSelect";
import DataTable from "./DataTable";
import DataGraph from "./DataGraph";

function DataContainer({ data, dataName, setEndDate }) {
    const [displayType, setDisplayType] = useState("graf");
    //Hej fra Pernille og CO

    return (
        <>
            <div data-testid={`${dataName}-container`} className="displayContainer">
                <div className="displayToggle" >
                    <button id={`grafbutton`} className={`databutton ` + (displayType === "graf" ? "highlighted" : "")} onClick={() => setDisplayType("graf")}>Graf</button>
                    <button id={`tablebutton`} className={`databutton ` + (displayType === "table" ? "highlighted" : "")} onClick={() => setDisplayType("table")}>Tabel</button>
                </div>
                <TimeSelect setEndDate={setEndDate} />
                {displayType === "table" ? <DataTable data={data} dataName={dataName} /> : <DataGraph data={data} dataName={dataName} />}
            </div>
        </>
    )
} export default DataContainer
