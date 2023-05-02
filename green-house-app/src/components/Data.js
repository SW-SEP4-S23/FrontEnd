import React, { useState } from "react";
import { useEffect } from "react";
import dummyData from '../dummyData.json';
import "../css/styles.css";
import "../css/Data.css";

function Data() {
    const [activeTab, setActiveTab] = useState("")
    //const [filter, setFilter] = useState("")
    const [data, setData] = useState([])
    const [displayType, setDisplayType] = useState("graf")
    const [dataName, setDataName] = useState("humidity")

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
        setDataName(tabName)
    }

    const handleDisplayTypeClick = (tabName) => {
        setDisplayType(tabName)
    }

    useEffect(() => {
        /*setData(fetch(`ENDPOINTFROMCLOUD/${dataName}}`).then(res => res.json()))*/
        console.log(dataName)
        setData(dummyData.data.filter((data) => data.name === dataName)[0].measurements.sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt)
        }))
    }, [dataName])

    useEffect(() => {
        console.log(dummyData.data)
        console.log(data)
    }, [data])

    return (
        <>
            <div className="tab-box">
                <div className="tab">
                    <button
                        id="humidityButton"
                        className={activeTab === "humidity" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("humidity")}
                    >
                        Humidity
                    </button>
                    <button
                        id="temperatureButton"
                        className={activeTab === "temperature" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("temperature")}
                    >
                        Temperature
                    </button>
                    <button
                        id="co2Button"
                        className={activeTab === "co2" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("co2")}
                    >
                        CO2
                    </button>
                    <div>
                        <button
                            className={displayType === "graf" ? "displaylinks active" : "displaylinks"}
                            onClick={() => handleDisplayTypeClick("graf")}
                        >
                            Graf
                        </button>
                        <button
                            className={displayType === "table" ? "displaylinks active" : "displaylinks"}
                            onClick={() => handleDisplayTypeClick("table")}
                        >
                            Table
                        </button>
                    </div>
                    <div>
                        <label>Start:</label><input></input>
                        <label>Slut:</label><input></input>
                    </div>


                </div>

                <div
                    id="humidity"
                    className={activeTab === "humidity" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "humidity" ? "block" : "none" }}
                >
                    <div className="header-data">
                        <h3>HumidityData</h3>
                    </div>
                    <div className="table-data">
                        <table>

                            <tbody>
                                <tr>
                                    <th>Date and Time</th>
                                    <th>Humidity</th>
                                </tr>
                                {data !== undefined ? (data.map(data => {
                                    return (
                                        <tr>
                                            <td>{data.createdAt.split("T")[0]}</td>
                                            <td>{data.createdAt.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                                            <td>{data.measurement}</td>
                                        </tr>

                                    )
                                })) : null}
                            </tbody>

                        </table>
                    </div>
                </div>

                <div
                    id="temperature"
                    className={activeTab === "temperature" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "temperature" ? "block" : "none" }}
                >
                    <div className="header-data">
                        <h3>TemperatureData</h3>
                    </div>
                    <div className="table-data">
                        <table>

                            <tbody>
                                <tr>
                                    <th>Date and Time</th>
                                    <th>Temperature</th>
                                </tr>
                                {data !== undefined ? (data.map(data => {

                                    return (


                                        <tr>
                                            <td>{data.createdAt.split("T")[0]}</td>
                                            <td>{data.createdAt.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                                            <td>{data.measurement}</td>
                                        </tr>

                                    )
                                })) : null}
                            </tbody>

                        </table>
                    </div>

                </div>

                <div
                    id="co2"
                    className={activeTab === "co2" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "co2" ? "block" : "none" }}
                >
                    <div className="header-data">
                        <h3>CO2Data</h3>
                    </div>
                    <div className="table-data">
                        <table>

                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>CO2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data !== undefined ? (data.map(data => {

                                    return (


                                        <tr>
                                            <td>{data.createdAt.split("T")[0]}</td>
                                            <td>{data.createdAt.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                                            <td>{data.measurement}</td>
                                        </tr>

                                    )
                                })) : null}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Data