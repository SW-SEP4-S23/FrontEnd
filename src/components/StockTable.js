import "../css/Data.css"
import "../css/styles.css"
import "../utils/dataNameToLabel.js"
import Amount from "../components/Amount"

export default function StockTable({data, onChange, handleButtonClick}) {

     if (data === undefined || data === null || data.length === 0)
    data = [
        {
            "name": "Basilikum",
            "id": 123,
            "optCo2": 400,
            "optTemp": 20,
            "optHum": 50,
            "amount": 10
        },
        {
            "name": "Persille",
            "id" : 234,
            "optCo2": 400,
            "optTemp": 21,
            "optHum": 51,
            "amount": 11
        },
        {
            "name": "Koriander",
            "id" : 345,
            "optCo2": 400,
            "optTemp": 22,
            "optHum": 52,
            "amount": 12
        }        
    ]  

    console.log(data)
    return (
        <>
            <table>
                <tbody>
                    <tr>
                    <th>Plantenavn</th>
                    <th>Optimal temperatur</th>
                    <th>Optimal luftfugtighed</th>
                    <th>Optimal CO2</th>
                    <th>Se logbog</th>
                    <th>Antal</th>
                    <th>Rediger</th>
                    </tr>
                    {data !== undefined && data.length !== 0 ? (data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.optTemp}</td>
                                <td>{item.optHumidity}</td>
                                <td>{item.optCo2}</td>
                                <td><button>Se logbog</button></td>
                                <td><input type={"number"} value={item.amount} onChange={(e)=> onChange(e.target.value, item.id)}/></td>
                                <td><button onClick={()=> handleButtonClick("edit")}>Rediger</button></td>
                            </tr>
                        )
                    })) : <tr><td colSpan={6}> Ingen data at vise.</td></tr>}                
                </tbody>
            </table>
            
        </>
    )
}