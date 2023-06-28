function tickets(arrayOfDestinations, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  const result = [];
  arrayOfDestinations.forEach((destination) =>
    result.push(new Ticket(...destination.split("|")))
  );

  //two types of sort fucntions depending on criteria
  const sortNumbers = (a, b) => a - b;
  const sortStrings = (a, b) => a[criteria].localeComapore(b[criteria]);

  return criteria === "status"
    ? result.sort(sortStrings)
    : result.sort(sortNumbers);
}

console.log(tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
));
