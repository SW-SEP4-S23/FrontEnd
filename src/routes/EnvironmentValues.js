import OkBox from "../components/OkBox";
import "../css/EnvironmentValues.css"
import SetEnvironmentValue from "../components/SetEnvironmentValue";
import React, { useState, useEffect } from "react";

export default function EnvironmentValues() {
    const [dataName, setDataName] = useState("temperature");
    const [minValue, setMinValue] = useState();
    const [maxValue, setMaxValue] = useState();
    const [isOkBoxVisible, setIsVisible] = useState(false);
    const [httpResponseCode, setHttpResponseCode] = useState();


    async function setDataValues() {
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
            <SetEnvironmentValue setDataName={setDataName} setMinValue={setMinValue} setMaxValue={setMaxValue} setDataValues={setDataValues} />
            <OkBox httpResponseCode={httpResponseCode} isOkBoxVisible={isOkBoxVisible} setIsVisible={setIsVisible} /> {/* skal kun være synglig hvis responskode er 200*/}
        </div>
    </>
}