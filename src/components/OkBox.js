import React, { useEffect } from "react"
import "../css/ServerFail.css"

function OkBox({ httpResponseCode, isOkBoxVisible, setIsVisible }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 5000)

        return () => clearTimeout(timer)
        //nedenstående sørger for at fjerne missing dependency warning på [dataName, endDate]
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOkBoxVisible])

    return (
        <div data-testid={`ok-box`}>
            {isOkBoxVisible && httpResponseCode === 200 &&
                <div style={{ color: "green" }}>
                    <h1 className="server-error-message">Værdierne er sat!</h1>
                </div>}
            {isOkBoxVisible && httpResponseCode !== 200 &&
                <div style={{ color: "red" }}>
                    <h1 className="server-error-message">Der skete en fejl, prøv igen senere</h1>
                </div>}
        </div>
    )
}


export default OkBox