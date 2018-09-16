import moment from 'moment';
import _ from 'underscore';
/**
 * This Method take following parems and validate the dates.
 * @param {*} dateFrom
 * @param {*} dateTo
 */
export const validDates = (dateFrom, dateTo) => {
  var isValid = true;

  if (dateFrom === undefined || dateTo === undefined) {
    isValid = false;
  }

  let fromFilter = moment(dateFrom);
  let toFilter = moment(dateTo);

  if (
    fromFilter.isSame(toFilter) ||
    fromFilter.isAfter(toFilter) ||
    toFilter.isBefore(fromFilter)
  ) {
    isValid = false;
  }

  return isValid;
};

/**
 * This Method take following parems and return filtered list.
 * @param {*} hotels
 * @param {*} startDate
 * @param {*} endDate
 * @param {*} nights
 */
export const filterHotelsByDate = (hotels, startDate, endDate, nights) => {
  let filteredHotels = [];
  filteredHotels = hotels.filter((hotel) => {
    let availability = hotel.availability;
    let yes = availability.filter((availabilityDate) => {
      let availabilityFrom = moment(availabilityDate.from, 'DD-MM-YYYY');
      let availabilityTo = moment(availabilityDate.to, 'DD-MM-YYYY');
      if (
        availabilityTo.isBetween(startDate, endDate, 'days', '[]') &&
        availabilityFrom.isBetween(startDate, endDate, 'days', '[]')
      ) {
        return true;
      }
      return false;
    });
    hotel.price = Math.round(hotel.price * nights);
    return yes.length > 0;
  });

  return filteredHotels;
};

export const findRangeValues = (hotels) => {
  let sortedArray = _.sortBy(hotels, (o) => o.price);
  const min = sortedArray.length > 0 ? sortedArray[0].price : 0;
  const max =
    sortedArray.length > 0 ? sortedArray[sortedArray.length - 1].price : 0;
  return { min: min, max: max };
};

export const  uniqueId = () => {
  return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
}
