// DATA
const Helpers = {
    api_url: '<<YOUR API URL HERE>>',
}

export default Helpers;

// FUNCTIONS
const parseDate = (thatDate) => {
    const date = new Date(thatDate);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear()
}

export {
    parseDate
}