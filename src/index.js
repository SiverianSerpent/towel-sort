
// You should implement your task here.

module.exports = function towelSort (ma) {
  if (!ma || !ma.length) { return []}
  for (let key in ma) {
    if (key % 2 !== 0) {
     ma[key].sort((a,b) => (b - a))
    }
  }
   let sigma = ma.join(',')
   let bitu = sigma.split(',')
   for (let key in bitu) {
    bitu[key] = Number(bitu[key])
   }
   return bitu
}
