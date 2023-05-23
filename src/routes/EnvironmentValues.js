import OkBox from "../components/OkBox";
import "../css/EnvironmentValues.css"
import SetEnvironmentValue from "../components/SetEnvironmentValue";
import React, { useState, useEffect } from "react";
import fetchData from "../services/fetchData";
import ServerFail from "../components/serverFail";
import postThresholds from "../services/postThresholds";

export default function EnvironmentValues() {
    const [isOkBoxVisible, setIsVisible] = useState(false);
    const [currentThresholds, setCurrentThresholds] = useState([]);
    const [currentValues, setCurrentValues] = useState([]);
    const [newThresholds, setNewThresholds] = useState([]);
    const [serverFail, setServerFail] = useState(false);
    const [serverFailMessage, setServerFailMessage] = useState([]);

    useEffect(() => {
        setCurrentThresholds({ temperature: { minValue: 22, maxValue: 25 }, humidity: { minValue: 22, maxValue: 25 }, co2: { minValue: 22, maxValue: 25 } }
        )
        fetchData({ setData: setCurrentValues, setServerFail: setServerFail });
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

    async function onSubmit(dataName, maxValue, minValue) {
        try {
            await postThresholds(dataName, maxValue, minValue, setIsVisible, setServerFail, setServerFailMessage);
        } catch (error) {
            console.error("Serverfejl", error);
        }
    }

    return <>
        <div className="environment-values top-container">
            <SetEnvironmentValue
                newThresholds={newThresholds}
                onChange={onChange}
                onSubmit={onSubmit}
                currentValues={currentValues} />
        </div>
        <div>
            {isOkBoxVisible ? <OkBox
                isOkBoxVisible={isOkBoxVisible}
                setIsVisible={setIsVisible} /> : ""}
            {serverFail ? <ServerFail
                setServerFail={setServerFail}
                serverFail={serverFail}
                serverFailMessage={serverFailMessage} /> : ""}
        </div>
    </>
}