import "../css/Data.css"
import "../css/styles.css"
import "../css/PlantManagement.css"
import "../css/StockTable.css"
import "../utils/dataNameToLabel.js"

export default function StockTable({data}) {

   /*  if (data === undefined || data === null || data.length === 0)
    data = [
        {
            "name": "Basilikum",
            "optCo2": 400,
            "optTemp": 20,
            "optHum": 50,
            "amount": 10
        },
        {
            "name": "Persille",
            "optCo2": 400,
            "optTemp": 21,
            "optHum": 51,
            "amount": 11
        },
        {
            "name": "Koriander",
            "optCo2": 400,
            "optTemp": 22,
            "optHum": 52,
            "amount": 12
        }        
    ]  */

    return (
        <>
            <table id="stock-table">
                <tbody className="green-table">
                    <tr>
                    <th>Plantenavn</th>
                    <th>Optimal temperatur</th>
                    <th>Optimal luftfugtighed</th>
                    <th>Optimal CO2</th>
                    <th>Se logbog</th>
                    <th>Antal</th>
                    </tr>

                    {data !== undefined && data.length !== 0 ? (data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.optCo2}</td>
                                <td>{item.optTemp}</td>
                                <td>{item.optHum}</td>
                                <td>{}</td>
                                <td>{item.amount}</td>
                            </tr>
                        )
                    })) : <tr><td colSpan={6}> Ingen data at vise.</td></tr>}                
                </tbody>
            </table>
        </>
    )
}