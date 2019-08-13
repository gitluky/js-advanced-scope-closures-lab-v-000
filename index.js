function produceDrivingRange (blocks) {
  return function (firstBlock, secondBlock) {
    const numberOfBlocks = Math.abs(parseInt(firstBlock.slice(0, -2)) - parseInt(secondBlock.slice(0, -2)));
    if (numberOfBlocks > blocks) {
      return `${numberOfBlocks - blocks} blocks out of range`
    } else {
      return `within range by ${blocks - numberOfBlocks}`
    }
  }
}

function produceTipCalculator (percentage) {
  return function (bill) {
    return bill * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor (name) {
      this.id = ++driverId;
    }
  }
}
const Driver = createDriver();
