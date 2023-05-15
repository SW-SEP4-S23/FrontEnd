import "../css/Data.css"
import "../css/styles.css"
import dataNameToLabel from "../utils/dataNameToLabel"
import "../utils/dataNameToLabel.js"

function DataTable({ data, dataName }) {
    return (
        <>
            <table>
                <tbody>

                    <tr>
                        <th>Dato</th>
                        <th>Tid</th>
                        <th>{dataNameToLabel(dataName)}</th>
                    </tr>
                    {data !== undefined && data.length !== 0 ? (data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.timestamp.split("T")[0]}</td>
                                <td>{item.timestamp.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                                <td>{item[dataName]}</td>
                            </tr>
                        )
                    })) : <tr><td colSpan={3} >Ingen data at vise.</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default DataTable