import React, { useState, useEffect } from "react";

function OkBox({ httpResponseCode, isOkBoxVisible, setIsVisible }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isOkBoxVisible]);

    return (
        <div data-testid={`ok-box`}>
            {isOkBoxVisible && httpResponseCode === 200 && <div style={{color: "green"}}>Gemt!</div>}
            {isOkBoxVisible && httpResponseCode !== 200 && <div style={{color: "red"}}>Der skete en fejl, prøv igen senere</div>}
        </div>
    );
}


export default OkBox;