import { useEffect, useState } from "react"
import DataTabsDisplay from "../components/DataTabsDisplay"
import fetchData from "../services/fetchData"

export default function Information() {
  const [data, setData] = useState([])
  const [dataName, setDataName] = useState("temperature")
  const [endDate, setEndDate] = useState(new Date())
  const startDate = new Date()

  //henter data pba. valgte tab og tidspunkt

  /*når dataName eller endDate ændres, ift. hvilken tab og tidspunkt man har trykket på,
    så rerenders siden, og den korrekte data hentes*/
  useEffect(() => {
    fetchData(dataName, endDate, startDate, setData)

    //nedenstående sørger for at fjerne missing dependency warning på [dataName, endDate]
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataName, endDate])

  return (
    <>
      <div className="dataContainer top-container">
        <DataTabsDisplay
          data={data}
          setDataName={setDataName}
          setEndDate={setEndDate}
        />
      </div>
    </>
  )
}
