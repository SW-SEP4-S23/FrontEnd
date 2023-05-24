export default function Amount ({amount, id, onChange, onSubmit}){
return(
    <div> 
        <input value={amount} onChange ={(e) => onChange(id, e.target.value)} type = 'number'/> 
        <button onClick={()=>onSubmit(id)}>OK</button>
        </div>
)

}