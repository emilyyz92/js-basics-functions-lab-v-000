// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(block1, block2) {
  let blocks = Math.max(block1, block2) - Math.min(block1, block2);
  return 264 * blocks;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return 0.02 * distanceTravelledInFeet(start, destination);
  } else if (distanceTravelledInFeet(start, destination) > 2000) {
    return 25;
  } else if (dis)
}