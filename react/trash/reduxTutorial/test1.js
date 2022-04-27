function main(N) {
  var arr = [];
  var i = 1;
  for (i; i < N; i++) {
    if (N % i == 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  const sumOfArr = arr.reduce((t, v, i) => (t = t + v));
  console.log({ sumOfArr });
  if (sumOfArr == N) {
    return "N is perfect number";
  } else {
    return "N is perfect number";
  }
}

main(28);
