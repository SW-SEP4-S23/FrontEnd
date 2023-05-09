import "../css/Data.css"
import "../css/styles.css"

function DataTable({ data, dataName }) {




    return (
        <>



            <table>
                <tbody>

                    <tr>
                        <th>Dato</th>
                        <th>Tid</th>
                        <th>{dataName} værdi</th>
                    </tr>
                    {data !== undefined && data.length !== 0 ? (data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.createdAt.split("T")[0]}</td>
                                <td>{item.createdAt.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                                <td>{item.measurement}</td>
                            </tr>
                        )
                    })) : <tr><td>No data available.</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default DataTable