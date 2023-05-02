import "../css/Data.css"
import "../css/styles.css"

function DataTable({ data, dataName, setEndDate }) {

    const handleDateSelect = (event) => {
        const value = event.target.value

        //switch som giver korrekt tidspunkt ift. dagsdato
        switch (value) {
            case 'This Year':
                setEndDate(new Date(new Date().getFullYear(), 0, 1))
                break
            case 'Last Year':
                setEndDate(new Date(new Date().getFullYear() - 1, 0, 1))
                break
            case 'This Quarter':
                const thisQuarter = Math.floor((new Date().getMonth() + 3) / 3)
                setEndDate(new Date(new Date().getFullYear(), 3 * thisQuarter - 3, 1))
                break;
            case 'Last Quarter':
                const lastQuarter = Math.floor((new Date().getMonth() + 3) / 3) - 1
                setEndDate(new Date(new Date().getFullYear(), 3 * lastQuarter - 3, 1))
                break
            case 'This Month':
                setEndDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
                break
            case 'Last Month':
                setEndDate(new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1))
                break
            case 'This Week':
                const firstDayOfWeek = new Date().getDate() - new Date().getDay()
                setEndDate(new Date(new Date().getFullYear(), new Date().getMonth(), firstDayOfWeek))
                break
            default:
                setEndDate(null)
                break
        }
    }


    return (
        <>
            <div>
                <select onChange={handleDateSelect}>
                    <option value="">Select Date Range</option>
                    <option value="This Year">This Year</option>
                    <option value="Last Year">Last Year</option>
                    <option value="This Quarter">This Quarter</option>
                    <option value="Last Quarter">Last Quarter</option>
                    <option value="This Month">This Month</option>
                    <option value="Last Month">Last Month</option>
                    <option value="This Week">This Week</option>
                </select>
            </div>


            <table>
                <tbody>

                    <tr>
                        <th>Date and Time</th>
                        <th>{dataName} value</th>
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