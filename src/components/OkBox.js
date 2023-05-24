import React, { useEffect } from "react"
import "../css/OkBox.css"

function OkBox({ isOkBoxVisible, setIsVisible }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
        //nedenstående sørger for at fjerne missing dependency warning på [dataName, endDate]
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOkBoxVisible])

    return (
        <div data-testid={`ok-box`}>
                <div id="succes-status">
                    <h1  style={{ color: "green" }}>Gemt</h1>
                </div>
        </div>
    )
}


export default OkBox