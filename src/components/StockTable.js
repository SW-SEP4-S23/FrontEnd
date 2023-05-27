import "../css/Data.css"
import "../css/styles.css"
import "../css/PlantManagement.css"
import "../css/StockTable.css"
import "../utils/dataNameToLabel.js"

export default function StockTable({data, onChange, openLogbook}) {

    
    return (
        <>
            <table id="stock-table">
                <tbody className="green-table">
                    <tr>
                    <th>Plantenavn</th>
                    <th>Optimal temperatur</th>
                    <th>Optimal luftfugtighed</th>
                    <th>Optimal CO2</th>
                    <th>Antal</th>
                    <th></th>
                    </tr>
                    {data !== undefined && data.length !== 0 ? (data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.plantName}</td>
                                <td>{item.optimalTemp}</td>
                                <td>{item.optimalHumidity}</td>
                                <td>{item.optimalCo2}</td>
                                <td><button onClick={()=> openLogbook(item.id)}>Se logbog</button></td>
                                <td><input type={"number"} value={item.stock} onChange={(e)=> onChange(e.target.value, item.id)}/></td>
                            </tr>
                        )
                    })) : <tr><td colSpan={6}> Ingen data at vise.</td></tr>}                
                </tbody>
            </table>
            
        </>
    )
}