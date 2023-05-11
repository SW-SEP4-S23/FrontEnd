import { useEffect, useState } from "react";
import DataTabsDisplay from "../components/DataTabsDisplay";

export default function Information() {
  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState("temperature");
  const [endDate, setEndDate] = useState(new Date());
  const startDate = new Date();

  //henter data pba. valgte tab og tidspunkt
  async function getData() {
    const response = await fetch(
      `https://cloud-app-byi2ujnffa-ez.a.run.app/${dataName}?startDate=${endDate.toISOString()}&endDate=${startDate.toISOString()}`
    );

    const jsonData = await response.json();

    if (response.ok) {
      setData(jsonData)
    }
    else {
      alert("Server error, please try again later")
    }

    console.log(jsonData);

  }

  /*når dataName eller endDate ændres, ift. hvilken tab og tidspunkt man har trykket på,
    så rerenders siden, og den korrekte data hentes*/
  useEffect(() => {
    getData();

    //nedenstående sørger for at fjerne missing dependency warning på [dataName, endDate]
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataName, endDate]);

  return (
    <>
      <div className="dataContainer">
        <DataTabsDisplay
          data={data}
          setDataName={setDataName}
          setEndDate={setEndDate}
        />
      </div>
    </>
  );
}
