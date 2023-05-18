import "../css/frontpage.css"
import "../css/top-container.css"
import logo from "../images/logo.PNG"
import notifications from "../images/notification.png"
import inventory from "../images/inventory.jpg"
import enviroment from "../images/enviromental-values.png"

export default function Hjem() {
    return <>
        <div className="frontpage-container top-container">
            <div>
                <h1>Skab vækst, innovation og bæredygtighed med vores eksperter</h1>
            </div>
            <img id="frontpage-logo" src={logo} alt="Firm Logo" />
            <div>
                <h4> Passion omkring dyrkning af planter og skabelsen af naturlig skønhed og bæredygtighed. Vores væksthus er fyldt med en mangfoldighed af planter, der er omhyggeligt dyrket og plejet af vores dedikerede gartnere.        </h4>
            </div>
        </div>
        <div className="more-information">
            <div className="circle-div">
                <img src={inventory} alt="Lagerbeholdning-billede" className="circle-image" />
                <p>Få overblik over lagerbeholdningen</p>
            </div>
            <div className="circle-div">
                <img src={enviroment} alt="Miljøværdier-billede" className="circle-image" />
                <p>Administrer og monitorér aktuelle miljøforhold</p>
            </div>
            <div className="circle-div">
                <img src={notifications} alt="Notifikationer-billede" className="circle-image" />
                <p>Hold dig informeret om opdateringer og påmindelser</p>
            </div>
            </div>
        </>
}