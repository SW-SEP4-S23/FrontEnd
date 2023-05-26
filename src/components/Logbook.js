import { useState } from "react"
import "../css/Logbook.css"
import OkBox from "./OkBox";

function Logbook({ logMessages, logNewMessage, isOkBoxVisible, setIsVisible, setIsLogbookOpen}) {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <div className="logbook-container">
                <div className="new-log-message">
                    <form id="logbook-form">
                    <button onClick={() => setIsLogbookOpen(false)}>Luk</button>

                        <textarea value={inputValue} onChange={handleInputChange} id="logTextField">
                        </textarea>
                        <button onClick={() => logNewMessage(inputValue)}>Gem</button>
                        <OkBox isOkBoxVisible={isOkBoxVisible} setIsVisible={setIsVisible} />
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

} export default Logbook