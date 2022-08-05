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

//this not understood
//bindary method
// function squreRoot(N) {
//   if (N == 0) {
//     return 0;
//   }
//   let start = 1,
//     end = N,
//     ans;

//   while (start <= end) {
//     let mid = Math.trunc(start + (end - start) / 2);

//     console.log({ mid });
//     if (mid <= N / mid) {
//       ans = mid;
//       start = mid + 1;
//       console.log({ start });
//     } else {
//       end = mid - 1;
//       console.log({ end });
//     }
//   }
//   return ans;
// }

// console.log(squreRoot(64));

//armstrong number
// function armStrongNUmber(N) {
//   let i;

//   for (i = 1; i <= N; i++) {
//     let arrayOfN = i
//       .toString()
//       .split("")
//       .map((v) => parseInt(v) ** 3);

//     const totalVal = arrayOfN.reduce((t, v) => t + v, 0);

//     if (i == totalVal) {
//       console.log(i);
//       //   break;
//     }
//   }
// }
// armStrongNUmber(153)

// For a given number A, print its multiplication table having the first 10 multiples.
// input : 2
// o/p :
// 2 * 1 = 2
//  2 * 2 = 4
//  2 * 3 = 6
//  2 * 4 = 8
//  2 * 5 = 10
//  2 * 6 = 12
//  2 * 7 = 14
//  2 * 8 = 16
//  2 * 9 = 18
//  2 * 10 = 20

// function multiplicationTable(N){
//   let i = 1;
//   for (i; i <= 10; i++) {
//     console.log(N + " * " + i + " = " + N * i);
//   }
// }
// multiplicationTable("10");

// q3)
function inter(N) {
  let iteration = 0;
  for (let i = 0; i <= N; i++) {
    iteration++;
  }
  console.log({N ,iteration});
}
inter(9);
