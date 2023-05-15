function dataNameToLabel(dataName) {
    switch (dataName) {
        case "temperature":
            return "Temperatur"
        case "humidity":
            return "Luftfugtighed"
        case "co2":
            return "CO2"
        default:
            return ""
    }
} export default dataNameToLabel
