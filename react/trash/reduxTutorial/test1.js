function main(N) {
  var i = 1;
  var flag = 0;

  for (i; i * i <= N; i++) {
    if (N % i == 0) {
      if (i == N / i) {
        flag++;
      } else {
        flag = flag + 2;
      }
    }
  }
  // console.log({ flag });
  if (flag == 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

main(999563);
