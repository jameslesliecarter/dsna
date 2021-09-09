let insert = (intervals, newInterval) => {
  // edge case: zero length input intervals
  if (intervals.length === 0) {
    // return newInterval in array
    return [newInterval];
  }

  // create array to push intervals into
  let res = [];
  // initialize counter at 0
  let i = 0;
  // create new interval which will be the overlap of all inital intervals with new interval
  let span = [newInterval[0], newInterval[1]];

  // iterate through intervals with these parameters
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    // i is less than length (run out of room)
    // current interval is completely below new interval
    // push these intervals to new array
    res.push(intervals[i]);
    // iterate i
    i ++;
  }

  // at this point we have pushed all entirely below intervals into new array
  // now iterate through intervals with new parameters:
  // i is less than length (no runover)
  // 0th element of current interval is less than 1th element of new interval
  while (i < intervals.length && intervals[i][0] <= span[1]) {
    // span interval will go from minimum of span interval to max of any interval that fits this bill
    span = [
            Math.min(intervals[i][0], span[0]),
            Math.max(intervals[i][1], span[1])
            ];
    i ++;
  }
  res.push(span);

  // now we have all lower and spanned intervals pushed
  // iterate through rest of intervals, pushing rest to result
  while (i < intervals.length) {
    res.push(intervals[i]);
    i ++;
  }

  // return result
  return res;
}