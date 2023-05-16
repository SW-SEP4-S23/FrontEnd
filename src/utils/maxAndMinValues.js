function maxAndMinValues(dataName) {
    //Første værdi er minimumsværdi, og sidste værdi er maksimumsværdi
    switch (dataName) {
        case "temperature":
            return [5, 35]
        case "humidity":
            return [10, 90]
        case "co2":
            return [10, 80]
        default:
            return ""
    }
} export default maxAndMinValues
