import "../css/styles.css"
import "./SetEnvironmentValue.css"
import "../utils/dataNameToLabel.js"
import dataNameToLabel from "../utils/dataNameToLabel.js"


function SetEnvironmentValue({ setDataName, setMinValue, setMaxValue, setDataValues, thresholds, currentValues}) {

    if (!thresholds || thresholds.length === 0) {
        thresholds = {temperature: {min: 20, max: 25}, humidity: {min: 40, max: 60}, co2: {min: 2, max: 4}}
    }

    if (currentValues === undefined || currentValues?.length === 0) {
        currentValues = {temperature: 22.3, humidity: "62%", co2: "3.2%"}
    }


    return (
        <>
            <div className="setEnvironmentValueDiv">
                {["temperature", "humidity", "co2"].map((dataName) => (<div key={dataName}> 
                <div className="environmentValueCard">
                <p className="valueName">{dataNameToLabel(dataName)}</p>
                <div className="thresholds">
                    <div className="thresholdsinputs">
                        <div className="thresholdsinput">
                        <label>min:<input name="min" type="number" placeholder={thresholds[dataName]?.min} onChange={(event) => setMinValue(event.target.value)} /></label>
                        </div>
                        <p className="currentValue">{currentValues[dataName]}</p>
                        <div className="thresholdsinput">
                        <label>max:<input name="max" type="number" placeholder={thresholds[dataName]?.max} onChange={(event) => setMaxValue(event.target.value)} /></label>
                        </div>
                    </div>
                        <button onClick={() => setDataValues(dataName)}>OK</button>
                    </div>
                </div>
                
                </div>))}
            </div>
        </>
    );
}

export default SetEnvironmentValue