'use strict';


// --------------------------- DEFAULT PARAMETERS ----------------------------------

const bookings = [];

// ES6 way - We can also use previously defined parameters in other parameters
const createBooking = function(flightName, numPassengers = 1, price = 199 * numPassengers){

    // // ES5 way of setting default parameters using Short Circuiting
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightName,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);
}

createBooking('A320B');
createBooking('B120Z', 2);
createBooking('B120Z', undefined, 1000);    // use undefined if you want to skip a middle parameter (use it's default value)