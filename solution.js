function apartmentHunting(blocks, reqs) {
  let leastDis = Number.MAX_VALUE;
  let BlockIndex = 0;

  for (let i = 0; i < blocks.length; i++) {
    let maxDis = 0;
    for (let j = 0; j < reqs.length; j++) {
      let distance = (blocks, i, reqs) => {
        let leftDis = 0;
        let rightDis = 0;
        //Here we are finding distance from left
        for (let k = i; k >= 0; k--) {
          if (blocks[k][reqs[j]]) {
            leftDis = i - k;
            break;
          }
        }
        //Here we are finding distane from right
        for (let k = i; k < blocks.length; k++) {
          if (blocks[k][reqs[j]]) {
            rightDis = k - i;
            break;
          }
        }
        //    console.log(distance);
        return Math.max(leftDis, rightDis);
      };

      if (distance(blocks, i, reqs) > maxDis) {
        //   console.log(distance());
        maxDis = distance(blocks, i, reqs);
      }
    }

    if (maxDis < leastDis) {
      leastDis = maxDis;
      BlockIndex = i;
    }
  }

  return BlockIndex;
}
exports.apartmentHunting = apartmentHunting;
