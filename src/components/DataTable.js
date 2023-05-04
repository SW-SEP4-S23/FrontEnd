import "../css/Data.css"
import "../css/styles.css"

function DataTable({ data, dataName}) {

    


    return (
        <>



            <table>
                <tbody>

                    <tr>
                        <th>Dato og tid</th>
                        <th>{dataName} værdi</th>
                    </tr>
                    {/*                 {data !== undefined ? (data.map(item => {
                    return (
                        <tr>
                            <td>{item.createdAt.split("T")[0]}</td>
                            <td>{item.createdAt.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                            <td>{item.measurement}</td>
                        </tr>
                    )
                })) : null} */}
                    <tr>
                        <td>HEJ!</td>
                        <td>Med!</td>
                        <td>Dig!</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default DataTable