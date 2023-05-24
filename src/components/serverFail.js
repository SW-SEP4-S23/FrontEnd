import React, { useState, useEffect } from 'react';
import "../css/ServerFail.css"

const ServerFail = ({ setServerFail, serverFail, serverFailMessage }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setServerFail(false)
        }, 5000)
        console.log(serverFailMessage)

        return () => clearTimeout(timer)
        //nedenstående sørger for at fjerne missing dependency warning på [dataName, endDate]
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serverFail])

    return (
        <div>

            {serverFailMessage !== undefined ?
                serverFailMessage.map((message, index) => (
                <h1 key={index} className='server-error-message'>Error: {message}</h1>
                )
                ) : (
                    <h1 className="server-error-message">Serverfejl, prøv igen senere</h1>
                )
            }
        </div>
    );
};

export default ServerFail;
