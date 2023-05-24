import "../css/styles.css"
import "../css/Data.css"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import DataContainer from "./DataContainer"

function DataTabsDisplay({ data, setDataName, setStartDate }) {
    return (
        <>
            <div className="Data">
                <Tabs className="Tabs">
                    <TabList>
                        <Tab onClick={() => setDataName("temperature")}>Temperatur</Tab>
                        <Tab onClick={() => setDataName("humidity")}>Luftfugtighed</Tab>
                        <Tab onClick={() => setDataName("co2")}>CO2</Tab>
                    </TabList>
                    <TabPanel>
                        <DataContainer data={data} dataName={"temperature"} setStartDate={setStartDate} />                   
                    </TabPanel>
                    <TabPanel>
                        <DataContainer data={data} dataName={"humidity"} setStartDate={setStartDate} />
                    </TabPanel>
                    <TabPanel>
                        <DataContainer data={data} dataName={"co2"} setStartDate={setStartDate} />
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default DataTabsDisplay