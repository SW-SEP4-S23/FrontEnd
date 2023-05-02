import React, { useState } from "react";


function TabsTable({data, dataName}) {

    return (
        <>
            <tbody>
                <tr>
                    <th>Date and Time</th>
                    <th>{dataName}</th>
                </tr>
                {data !== undefined ? (data.map(item => {
                    return (
                        <tr>
                            <td>{item.createdAt.split("T")[0]}</td>
                            <td>{item.createdAt.split("T")[1].replace("Z", "").split(":").slice(0, 2).join(":")}</td>
                            <td>{item.measurement}</td>
                        </tr>
                    )
                })) : null}
            </tbody>
        </>
    )
}

export default TabsTable