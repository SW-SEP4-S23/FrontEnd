import "../css/styles.css"
import "../css/SetEnvironmentValue.css"
import "../utils/dataNameToLabel.js"
import "../utils/maxAndMinValues.js"
import dataNameToLabel from "../utils/dataNameToLabel.js"
import maxAndMinValues from "../utils/maxAndMinValues.js"

function SetEnvironmentValue({newThresholds, onChange, onSubmit, currentValues }) {


    if (newThresholds === undefined || newThresholds?.length === 0) {
        newThresholds = { temperature: { minValue: 22, maxValue: 25 }, humidity: { minValue: 22, maxValue: 25 }, co2: { minValue: 22, maxValue: 25 } }
    }
    if (currentValues === undefined || currentValues?.length === 0) {
        currentValues = [{ type: "temperature", value: 22.3},{ type: "humidity", value: "62%"},{ type: "co2", value: "3.2%" }]
    }


    return (
        <>
            <div className="setEnvironmentValueDiv">
                {currentValues.map((dataPoint) => {
                    const dataName = dataPoint.type.toLowerCase();
                    const value = dataPoint.value;

                    return(<div key={dataName}>
                    <div className="environmentValueCard">
                        <div className="thresholds">
                            <div className="thresholdsinputs">
                            <p className="currentValue">{dataNameToLabel(dataName)}: </p><p id="data-name">{value}</p>
                            <p>Vælg nye værdier:</p>
                                <div className="thresholdsinput">
                                    <label>min:<input id="environment-value-input"
                                        name="min"
                                        type="number"
                                        min= {maxAndMinValues[dataName][0]}
                                        max={newThresholds[dataName].maxValue < maxAndMinValues[dataName][1] ? newThresholds[dataName].maxValue : maxAndMinValues[dataName][1]}
                                        onKeyDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        value={newThresholds[dataName].minValue}
                                        onChange={(event) => onChange({name: dataName, type: "minValue", value: event.target.value})} />
                                    </label>
                                </div>
                                <div className="thresholdsinput">
                                    <label>max:<input
                                        name="max"
                                        type="number"
                                        min={newThresholds[dataName].minValue > maxAndMinValues[dataName][0] ? newThresholds[dataName].minValue : maxAndMinValues[dataName][0] }
                                        max={maxAndMinValues[dataName][1]}
                                        onKeyDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        value={newThresholds[dataName].maxValue}
                                        onChange={(event) => onChange({name: dataName, type: "maxValue", value: event.target.value })} />
                                    </label>
                                </div>
                            </div>
                            <button className="databutton" onClick={() => onSubmit(dataName, newThresholds[dataName].maxValue, newThresholds[dataName].minValue)}>OK</button>
                        </div>
                    </div>

                </div>)})}
            </div>
        </>
    );
}

export default SetEnvironmentValue