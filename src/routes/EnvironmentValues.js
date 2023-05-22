import OkBox from "../components/OkBox";
import "../css/EnvironmentValues.css"
import SetEnvironmentValue from "../components/SetEnvironmentValue";
import React, { useState, useEffect } from "react";
import fetchThresholds from "../services/fetchThresholds";
import fetchData from "../services/fetchData";
import ServerFail from "../components/serverFail";
import postThresholds from "../services/postThresholds";

export default function EnvironmentValues() {
   const [isOkBoxVisible, setIsVisible] = useState(false);
    const [httpResponseCode, setHttpResponseCode] = useState();
    const [currentThresholds, setCurrentThresholds] = useState([]);
    const [currentValues, setCurrentValues] = useState([]);
    const [newThresholds, setNewThresholds] = useState([]);
    const [serverFail, setServerFail] = useState(false);

    useEffect(() => {
        //fetchThresholds(setCurrentThresholds, setServerFail);
        setCurrentThresholds({ temperature: { minValue: 22, maxValue: 25 }, humidity: { minValue: 22, maxValue: 25 }, co2: { minValue: 22, maxValue: 25 } }
            )
        fetchData({setData: setCurrentValues, setServerFail: setServerFail});
    }, []);

    useEffect(() => {
        setNewThresholds(currentThresholds);
    }, [currentThresholds]);


    function onChange(change) {
        setNewThresholds((prev) => {
            const newThresholds = { ...prev };
            newThresholds[change.name][change.type] = change.value;
            return newThresholds;
        }
        );
    }

    async function onSubmit() {

        postThresholds(newThresholds, setServerFail, setHttpResponseCode);
        /*vi tjekker responskode, og hvis den giver 200, skal OkBox lave en grøn boks
        som informerer brugeren om, at de nye værdier er blevet sat*/
        setHttpResponseCode(200);
        setIsVisible(true);
    }

    return <>
        <div className="environment-values top-container">
            <SetEnvironmentValue newThresholds={newThresholds} onChange={onChange} onSubmit={onSubmit} currentValues={currentValues}/>
            <OkBox httpResponseCode={httpResponseCode} isOkBoxVisible={isOkBoxVisible} setIsVisible={setIsVisible} /> {/* skal kun være synlig hvis responskode er 200*/}
            {serverFail?<ServerFail setServerFail={setServerFail} serverFail={serverFail}/>:""}        
        </div>
    </>
}