import { useEffect, useState } from "react"
import DataTabsDisplay from "../components/DataTabsDisplay"
import fetchData from "../services/fetchData"
import ServerFail from "../components/serverFail"

export default function Information() {
  const [data, setData] = useState([])
  const [dataName, setDataName] = useState("temperature")
  const [startDate, setStartDate] = useState(new Date())
  const [serverFail, setServerFail] = useState(false)
  const endDate = new Date()

  //henter data pba. valgte tab og tidspunkt

  /*når dataName eller endDate ændres, ift. hvilken tab og tidspunkt man har trykket på,
    så rerenders siden, og den korrekte data hentes*/
  useEffect(() => {
    fetchData({dataName: dataName, endDate: endDate, startDate: startDate, setData: setData, setServerFail: setServerFail})

    //nedenstående sørger for at fjerne missing dependency warning på [dataName, endDate]
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataName, startDate])

  return (
    <>
      <div className="dataContainer top-container">
        <DataTabsDisplay
          data={data}
          setDataName={setDataName}
          setEndDate={setStartDate}
        />
      </div>
      {serverFail?<ServerFail setServerFail={setServerFail} serverFail={serverFail}/>:""}
    </>
  )
}
