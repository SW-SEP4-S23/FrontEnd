import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer } from "recharts"
import convertTimestamp from "../utils/convertTimestamp"
import "../css/DataGraph.css"

function DataGraph({ data, dataName }) {

    data = data && data.map((dataPoint) => {
        return {
            timestamp: convertTimestamp(dataPoint.timestamp),
            [dataName]: dataPoint[dataName]
        }
    })

    return (
      <div role="graph" className="dataGraphContainer">
        <h3>{dataName}</h3>
        {data !== undefined && data.length !== 0 ? (
          <ResponsiveContainer width="95%" height={250}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 0, bottom: 35 }}
            >
              <XAxis
                dataKey={"timestamp"}
                interval="preserveStartEnd"
                angle={-35}
                textAnchor={"end"}
                axisLine={false}
                tickMargin={4}
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem"
                }}
                tickCount={1}
              />
              <YAxis tickCount={5} />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey={dataName} stroke="#ff0000" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Ingen data at vise.</p>
        )}
      </div>
    )
  }


export default DataGraph