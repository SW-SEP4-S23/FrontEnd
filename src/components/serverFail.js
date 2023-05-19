import React, { useState, useEffect } from 'react';
import "../css/ServerFail.css"

const ServerFail = ({ setServerFail, serverFail }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setServerFail(false)
        }, 3000)

        return () => clearTimeout(timer)
        //nedenstående sørger for at fjerne missing dependency warning på [dataName, endDate]
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serverFail])

    return (
        <div>
            <h1 className="server-error-message">Serverfejl, prøv igen senere</h1>
        </div>
    );
};

export default ServerFail;
