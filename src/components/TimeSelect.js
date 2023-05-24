function TimeSelect({ setStartDate }) {

    const handleDateSelect = (event) => {
        const value = event.target.value

        if (value === "") return

        //switch som giver korrekt tidspunkt ift. dagsdato
        switch (value) {
            case 'This Year':
                setStartDate(new Date(new Date().getFullYear(), 0, 1))
                break
            case 'Last Year':
                setStartDate(new Date(new Date().getFullYear() - 1, 0, 1))
                break
            case 'This Quarter':
                const thisQuarter = Math.floor((new Date().getMonth() + 3) / 3)
                setStartDate(new Date(new Date().getFullYear(), 3 * thisQuarter - 3, 1))
                break
            case 'Last Quarter':
                const lastQuarter = Math.floor((new Date().getMonth() + 3) / 3) - 1
                setStartDate(new Date(new Date().getFullYear(), 3 * lastQuarter - 3, 1))
                break
            case 'This Month':
                setStartDate(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
                break
            case 'Last Month':
                setStartDate(new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1))
                break
            case 'This Week':
                const firstDayOfWeek = new Date().getDate() - new Date().getDay()
                setStartDate(new Date(new Date().getFullYear(), new Date().getMonth(), firstDayOfWeek))
                break
            default:
                setStartDate(null)
                break
            case 'Today':
                setStartDate(new Date())
                break
        }
    }

    return (<>

        <div>
            <select onChange={handleDateSelect}>
                <option value="">Vælg tidsinterval</option>
                <option value="Today">Idag</option>
                <option value="This Week">Denne uge</option>
                <option value="This Month">Denne måned</option>
                <option value="Last Month">Sidste måned</option>
                <option value="This Quarter">Dette kvartal</option>
                <option value="Last Quarter">Sidste kvartal</option>
                <option value="This Year">Dette år</option>
                <option value="Last Year">Sidste år</option>
            </select>
        </div>

    </>)
} export default TimeSelect