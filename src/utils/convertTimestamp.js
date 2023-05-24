//Helper class that converts a timestamp in a IOS 8601 format to a human readable format
//Example: 2021-03-10T15:00:00.000Z -> 10.03.2021 15:00
export default function convertTimestamp(timestamp) {

        let date = new Date(timestamp);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        return `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month} ${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`;
}
