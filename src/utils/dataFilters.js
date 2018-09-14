import moment from 'moment';

/**
 * This Method take following parems and validate the dates.
 * @param {*} dateFrom 
 * @param {*} dateTo 
 */
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

/**
 * This Method take following parems and return filtered list.
 * @param {*} hotels 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} nights 
 */
export const filterHotelsByDate = (hotels, startDate, endDate, nights) => {
    let filteredHotels = [];
    filteredHotels = hotels.filter(hotel => {
        let availability = hotel.availability;
        let yes =  availability.filter(availabilityDate => {
          let availabilityFrom = moment(availabilityDate.from, "DD-MM-YYYY");
          let availabilityTo = moment(availabilityDate.to, "DD-MM-YYYY");
          if (startDate.isBetween(availabilityFrom, availabilityTo, 'days', '[]') && endDate.isBetween(availabilityFrom, availabilityTo, 'days', '[]')) {
              return true;
          }
          return false;
         });
         hotel.price = hotel.price * nights;
         return yes.length > 0; 
      })
   return filteredHotels;  
}
