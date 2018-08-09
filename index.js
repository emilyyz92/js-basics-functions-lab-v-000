// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let blocks;
  if (distance >= 42) {
    blocks = distance - 42;
  } else {
    blocks = 42 - distance;
  }
  return blocks;
}
