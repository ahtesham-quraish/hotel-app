import moment from 'moment';
export const validDates = (dateFrom, dateTo)  => {
    var isValid = true;

    if (dateFrom === undefined || dateTo === undefined) {
        isValid = false;
    }

    let fromFilter = moment(dateFrom);
    let toFilter = moment(dateTo);

    if (fromFilter.isSame(toFilter) || fromFilter.isAfter(toFilter) || toFilter.isBefore(fromFilter)) {
        isValid = false;
    }
    
    return isValid;
}
