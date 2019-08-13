function produceDrivingRange (blocks) {
  return function (firstBlock, secondBlock) {
    const numberOfBlocks = Math.abs(parseInt(firstBlock.slice(0, -2)) - parseInt(firstBlock.slice(0, -2)));
    debugger;
    if (numberOfBlocks > blocks) {
      return `${numberOfBlocks - blocks} blocks out of range`
    } else {
      return `within range by ${blocks - numberOfBlocks}`
    }
  }
}