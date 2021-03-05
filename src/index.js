
// You should implement your task here.

module.exports = function towelSort (matrix) {
         if (typeof matrix === "undefined") {
             return [];
         } else {
             let ab = matrix.map((it) => {
                 if (matrix.indexOf(it) % 2 == 0) {
                     return it;
                 } else {
                     return it.reverse();
                 }
             });
             return ab.flat();
         } 
}
