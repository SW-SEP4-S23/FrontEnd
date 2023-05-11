import React, { useState, useEffect } from "react";

function OkBox({ httpResponseCode, isOkBoxVisible, setIsVisible }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isOkBoxVisible]);

    return (
        <>
            {isOkBoxVisible && httpResponseCode === 200 && <div>YAYYYYYY</div>}
            {isOkBoxVisible && httpResponseCode !== 200 && <div>NOOOOOO</div>}
        </>
    );
}


export default OkBox;