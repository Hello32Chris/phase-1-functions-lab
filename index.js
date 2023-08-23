function distanceFromHqInBlocks(street) { 
    let hq = 42;
    if (street > 42) {
    return street - hq;
  } else if (street < 42) {
    return hq - street;
  };
}

function distanceFromHqInFeet(street) {
    let block = 264;
    let ave = distanceFromHqInBlocks(street);
    return ave * block;
}

function distanceTravelledInFeet(start, end)  {
    let block = 264;
    if (start > end) {
        return (start - end)*block;
    } else if (end > start) {
        return (end - start)*block;
    }
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
      if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance -400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}