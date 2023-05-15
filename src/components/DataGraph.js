import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer } from "recharts";
import convertTimestamp from "../util/convertTimestamp";

function DataGraph({ data, dataName }) {

    data = data && data.map((dataPoint) => {
        return {
            timestamp: convertTimestamp(dataPoint.timestamp),
            [dataName]: dataPoint[dataName]
        }
    })

    return (
        <div role="graph">
        <h3>{dataName}</h3>
            <ResponsiveContainer width="95%" height={300}>
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
        </div>
    )
}

export default DataGraph