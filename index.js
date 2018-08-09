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

function distanceFromHqInFeet(distance) {
  let blocks;
  blocks = distanceFromHqInBlocks(distance);
  return blocks * 264;
}