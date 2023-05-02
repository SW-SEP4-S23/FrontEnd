import React, { useState } from "react";
import "../css/styles.css";
import "../css/Data.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabsTable from "./TabsTable";

function DataTabsDisplay({ data, setDataName }) {
    return (
        <>
            <div className="Data">
                <Tabs className="Tabs">
                    <TabList>
                        <Tab onClick={setDataName("Humidity")}>Humidity</Tab>
                        <Tab onClick={setDataName("Temperature")}>Temperature</Tab>
                        <Tab onClick={setDataName("CO2")}>CO2</Tab>
                    </TabList>
                    <TabPanel>
                        <p>Humidity!</p>
                        <TabsTable data={data} dataName={"Humidity"}/>
                    </TabPanel>
                    <TabPanel>
                        <p>Temperature!</p>
                        <TabsTable data={data} dataName={"Temperature"}/>
                    </TabPanel>
                    <TabPanel>
                        <p>CO2!</p>
                        <TabsTable data={data} dataName={"CO2"}/>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default DataTabsDisplay