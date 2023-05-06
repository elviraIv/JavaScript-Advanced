function solve(speed, areaType) {
  let difference = 0;
  let status = "";
  let speedLimit = 0;

  switch (areaType) {
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "motorway":
      speedLimit = 130;
      break;
  }

  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else if (speed <= speedLimit + 20) {
    status = "speeding";
    console.log(`The speed is ${
      speed - speedLimit
    } km/h faster than the allowed speed of ${speedLimit} -
    ${status}`);
  } else if (speed <= speedLimit + 40) {
    status = "excessive speeding";
    console.log(`The speed is ${
      speed - speedLimit
    } km/h faster than the allowed speed of ${speedLimit} -
    ${status}}`);
  } else {
    status = "reckless driving";
    console.log(`The speed is ${
      speed - speedLimit
    } km/h faster than the allowed speed of ${speedLimit} -
    ${status}`);
  }
}

solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
