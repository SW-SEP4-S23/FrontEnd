import "../css/styles.css"
import "../css/Data.css"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import DataTable from "./DataTable"

function DataTabsDisplay({ data, setDataName, setEndDate}) {
    return (
        <>
            <div className="Data">
                <Tabs className="Tabs">
                    <TabList>
                        <Tab onClick={() => setDataName("Humidity")}>Fugtighed</Tab>
                        <Tab onClick={() => setDataName("Temperature")}>Temperatur</Tab>
                        <Tab onClick={() => setDataName("CO2")}>CO2</Tab>
                    </TabList>
                    <TabPanel>
                        <DataTable data={data} dataName={"Humidity"} setEndDate={setEndDate}/>
                    </TabPanel>
                    <TabPanel>
                        <DataTable data={data} dataName={"Temperature"} setEndDate={setEndDate}/>
                    </TabPanel>
                    <TabPanel>
                        <DataTable data={data} dataName={"CO2"} setEndDate={setEndDate}/>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default DataTabsDisplay