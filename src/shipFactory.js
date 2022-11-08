const shipFactory = (length, timesHit, sunk) => {
  
  return {
    length,
    timesHit,
    sunk,
    hit() {
      timesHit++;
      return timesHit;
    },
    isSunk() {
      if (length === timesHit) return sunk = true;
      return sunk = false;
    }
  }
}

export {shipFactory}