var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2;
};

var sum_to_n_c = function (n) {
  if (n === 0) return 0;
  return n + sum_to_n_c(n - 1);
};

document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const n = parseInt(document.getElementById("numberInput").value, 10);

    if (isNaN(n) || n < 1) {
      document.getElementById("result").innerText =
        "Please enter a valid positive number.";
      return;
    }

    const result = sum_to_n_b(n);

    // Display the result
    document.getElementById(
      "result"
    ).innerText = `The sum from 1 to ${n} is ${result}`;
  });
