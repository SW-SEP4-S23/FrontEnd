import "../css/styles.css"


function SetEnvironmentValue({ setDataName, setMinValue, setMaxValue, setDataValues }) {

    const handleSelectChange = (event) => {
        if (event.target.value !== "") {
            setDataName(event.target.value);
        }
    };

    return (
        <>
            <div className="setEnvironmentValueDiv">
                <div>
                    <select defaultValue="" onChange={handleSelectChange}>
                        <option disabled value="">
                            Vælg miljø
                        </option>
                        <option value="temperature">temperatur</option>
                        <option value="humidity">Luftfugtighed</option>
                        <option value="co2">CO2</option>
                    </select>
                </div>
                <div>
                    <p>Minimum værdi</p>
                    <input type="number" placeholder="Minimum" onChange={(event) => setMinValue(event.target.value)} />
                    <p>Maximum værdi</p>
                    <input type="number" placeholder="Maximum" onChange={(event) => setMaxValue(event.target.value)} />
                </div>
                <button onClick={() => setDataValues()}>OK</button>
            </div>
        </>
    );
}

export default SetEnvironmentValue