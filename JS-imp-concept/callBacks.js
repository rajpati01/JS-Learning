function sum(a, b) {
  console.log(a + b);
}

function calculation(a, b, sumCallback) {
  sumCallback(a, b);
}

// calculation(2, 1, sum);

calculation(2, 1, (a, b) => {
  console.log(a + b);
});
