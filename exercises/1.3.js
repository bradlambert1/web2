///////////////////////////////////////////
//Plus ou moins

// function plusOuMoins(tableau) {
//   if (!Array.isArray(tableau)) {
//     return null;
//   }
//   console.table(tableau);

//   for (let i = 0; i < tableau.length; i++) {
//     if (Number.isFinite(tableau[i])) {
//       tableau[i] -= tableau[i] * 2;
//     }
//   }

//   console.table(tableau);
// }

//var tableau = [1, "2", 3];
// plusOuMoins(tableau);

/////////////////////////////////////////////
//  Dimensions de multiplications
// function mult(num) {
//   num += 1;
//   var newTable = [];
//   for (let i = 1; i < num; i++) {
//     newTable[i] = [];
//     for (let j = 1; j < num; j++) {
//       newTable[i][j] = j * i;
//     }
//   }
//   console.table(newTable);
// }
// mult(5);

//////////////////////////////////////////////
// Toute bonne chose a une fin
function fun(num) {
  if (num == 0) {
    return total;
  } else {
    total += num;
    fun(num - 1);
    return total;
  }
}
let total = 0;
console.log(fun(5));
