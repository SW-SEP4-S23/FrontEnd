import OkBox from "../components/OkBox";
import "../css/EnvironmentValues.css"
import SetEnvironmentValue from "../components/SetEnvironmentValue";
import React, { useState, useEffect } from "react";
import fetchThresholds from "../services/fetchThresholds";
import fetchData from "../services/fetchData";

export default function EnvironmentValues() {
    const [minValue, setMinValue] = useState(null);
    const [maxValue, setMaxValue] = useState(null);
    const [isOkBoxVisible, setIsVisible] = useState(false);
    const [httpResponseCode, setHttpResponseCode] = useState();
    const [thresholds, setThresholds] = useState([]);
    const [currentValues, setCurrentValues] = useState([]);


    async function fetchAverages() {
        const handleAverage = (data) => {
            if (data.length === 0) return;
            const dataName = Object.keys(data[0])[0];
            const average = data.reduce((total, item) => total + item[dataName], 0) / data.length;
            setCurrentValues((prev) => [...prev, { [dataName]: average }]);
        }

        const now = new Date();
        const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

        ["temperature", "humidity", "co2"].map((dataName) => {
            fetchData(dataName, oneHourAgo, now, handleAverage);
        });
    }

    useEffect(() => {
        fetchThresholds(setThresholds);
        fetchAverages();
    }, []);


    async function setDataValues(dataName) {
        const response = await fetch(
            `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?newMin=${minValue}&newMax=${maxValue}`
        );

        /*vi tjekker responskode, og hvis den giver 200, skal OkBox lave en grøn boks
        som informerer brugeren om, at de nye værdier er blevet sat*/
        setHttpResponseCode(response.status);
        setIsVisible(true);
        console.log(response.status);
    }

    return <>
        <div className="environment-values">
            <SetEnvironmentValue setMinValue={setMinValue} setMaxValue={setMaxValue} minValue={minValue} maxValue={maxValue} setDataValues={setDataValues} thresholds={thresholds} currentValues={currentValues}/>
            <OkBox httpResponseCode={httpResponseCode} isOkBoxVisible={isOkBoxVisible} setIsVisible={setIsVisible} /> {/* skal kun være synlig hvis responskode er 200*/}        
        </div>
    </>
}