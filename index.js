// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    let blocks = distance - 42;
  } else {
    let blocks = 42 - distance;
  }
  return blocks;
}
