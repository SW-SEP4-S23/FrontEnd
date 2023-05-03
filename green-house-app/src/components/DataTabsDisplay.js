import "../css/styles.css"
import "../css/Data.css"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import DataContainer from "./DataContainer"

function DataTabsDisplay({ data, setDataName, setEndDate }) {
    return (
        <>
            <div className="Data">
                <Tabs className="Tabs">
                    <TabList>
                        <Tab onClick={() => setDataName("temperature")}>Temperatur</Tab>
                        <Tab onClick={() => setDataName("humidity")}>Fugtighed</Tab>
                        <Tab onClick={() => setDataName("co2")}>CO2</Tab>
                    </TabList>
                    <TabPanel>
                        <DataContainer data={data} dataName={"temperature"} setEndDate={setEndDate} />                   
                    </TabPanel>
                    <TabPanel>
                        <DataContainer data={data} dataName={"humidity"} setEndDate={setEndDate} />
                    </TabPanel>
                    <TabPanel>
                        <DataContainer data={data} dataName={"co2"} setEndDate={setEndDate} />
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default DataTabsDisplay