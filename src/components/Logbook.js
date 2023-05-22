import { useState } from "react"
import "../css/Logbook.css"

function Logbook({ logMessages, logNewMessage }) {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <div className="logbook-container">
                <div className="new-log-message">
                    <form>
                        <input type="text" value={inputValue} onChange={handleInputChange}>
                        </input>
                        <button onClick={logNewMessage(inputValue)}></button>
                    </form>
                </div>
                <div className="log-messages">
                    <div>
                        {
                            logMessages.map(message =>
                                <div className="message">
                                    <div className="message-date">
                                        {message.date}
                                    </div>
                                    <div className="message-content">
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Logbook