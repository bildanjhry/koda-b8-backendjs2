function getTimeDate(time) {
    const date = new Date(time);
    const dates = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${dates}-${month}-${year}`
}

function getTimeDateSimple(time) {
    const date = new Date(time);
    const dates = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]
    return `${dates} ${months[date.getMonth()]} ${year}`
}

function getTimeOnly(time){
    const date = new Date(time);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`
}

const libsDate = {getTimeDate, getTimeDateSimple, getTimeOnly}
export default libsDate