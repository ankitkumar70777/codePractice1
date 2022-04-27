// You are given N positive integers.
// For each given integer A, you have to tell whether it is a perfect number or not.
// Perfect number is a positive integer which is equal to the sum of its proper positive divisors.

// function perfectNumber(N) {
//   N.forEach((v, i) => {
//     const tempArr = [];
//     for (var i = 1; i < v; i++) {
//       if (v % i == 0) {
//         tempArr.push(i);
//       }
//     }
//     console.log({ tempArr });
//     const sumOfArr = tempArr.reduce(
//       (total, value, index) => (total = total + value),
//       0
//     );
//     if (sumOfArr == v) {
//       console.log("YES");
//     } else {
//       console.log("NO");
//     }
//   });
// }
// perfectNumber([10, 81, 84, 94, 50, 39, 6, 39, 83, 8, 73]);

// Write a program to find sum all Natural numbers from 1 to N where you have to take N as input from user
// function sumOfAllNo(N) {
//   const sum = (N ** 2 + (N + 1)) / 2;
//   console.log(Math.trunc(sum));
// }

// sumOfAllNo(100);

// 2) squre root by normal method
// function squreRoot(A) {
//   let i;
//   let result;
//   let iteration = 0;
//   for (i = 1; i <= A; i++) {
//     iteration++;
//     if (i * i == A) {
//       console.log("iteration in if", iteration);
//       result = i;
//       return result;
//     }
//   }
//   console.log("iteration", iteration);
//   return -1;
// }
// console.log(squreRoot(200));

//bindary method
function squreRoot(A) {
  let minimumHalfValFun = (input) => {
    let tempVar = input;
    if (input % 2 == 0) {
      tempVar = tempVar / 2;
    } else {
      tempVar = (tempVar - 1) / 2;
    }
    if (tempVar**2 > A) {
      minimumHalfValFun(tempVar);
    }
    console.log({ tempVar });
  };
  let minimumHalfVal = minimumHalfValFun(A);
  console.log({ minimumHalfVal });
  //   if (halfOfA < A) {
  //   }
}
squreRoot(81);
