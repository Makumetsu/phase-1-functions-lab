function distanceFromHqInBlocks(someValue) {
   return Math.abs(someValue-42)
}
function distanceFromHqInFeet(someValue) {
   return Math.abs((someValue-42)*264)
}
function distanceTravelledInFeet(block1,block2) {
   return Math.abs((block2 - block1)*264)
}
function calculatesFarePrice(start, destination) {
   let distance = Math.abs((destination - start) * 264);
 
   if (distance <= 400) {
     return 0;
   } else if (distance <= 2000) {
     return ((distance - 400) * 0.02);
   } else if (distance <= 2500) {
     return 25;
   } else {
     return 'cannot travel that far';
   }
 }
