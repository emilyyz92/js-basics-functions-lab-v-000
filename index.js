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

function distanceFromHqInFeet(block1, block2) {
  let blocks = Math.max(block1, block2) - Math.min(block1, block2);
  return 264 * blocks;
}
