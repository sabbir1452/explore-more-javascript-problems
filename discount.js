/*
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200, First 100 tickets will be 100/ ticket
rest tickets will be 90 taka per piece
first 100 n--> 100tk
rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90 tk
    200+ ----> 70 tk
*/

// function ticketPrice(ticketQuantity) {
//   const first100Rate = 100;
//   const second100Rate = 90;
//   const restTicketRate = 70;
//   if (ticketQuantity <= 100) {
//     const price = ticketQuantity * first100Rate;
//     return price;
//   } else if (ticketQuantity <= 200) {
//     const first100Price = 100 * first100Rate;
//     const restTicketQuantity = ticketQuantity - 100;
//     const restTicketPrice = restTicketQuantity * second100Rate;
//     const totalPrice = first100Price + restTiketPrice;
//     return totalPrice;
//   } else {
//     const first100Price = 100 * first100Rate;
//     const second100Price = 100 * second100Rate;
//     const restTicketQuantity = ticketQuantity - 200;
//     const restTiketPrice = restTicketQuantity * restTicketRate;
//     const totalCost = first100Price + second100Price + restTiketPrice;
//     return totalCost;
//   }
// }
// const price = ticketPrice(250);
// console.log("price:", price);

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const ticketPrice = ticketQuantity * first100Rate;
    return ticketPrice;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity;
  }
}
const price = ticketPrice(20);

console.log("price:", price);
