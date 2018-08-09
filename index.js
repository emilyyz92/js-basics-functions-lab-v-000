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
  blocks *= 264
  return blocks * 264;
}

function distanceFromHqInFeet(block1, block2) {
  let blocks = Math.max(block1, block2) - Math.min(block1, block2);
  return 264 * blocks;
}
