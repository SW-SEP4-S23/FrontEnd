import React, { useEffect } from "react"

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
            {isOkBoxVisible && httpResponseCode === 200 && <div style={{ color: "green" }}>Værdierne er sat!</div>}
            {isOkBoxVisible && httpResponseCode !== 200 && <div style={{ color: "red" }}>Der skete en fejl, prøv igen senere</div>}
        </div>
    )
}


export default OkBox