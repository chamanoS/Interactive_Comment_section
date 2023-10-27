const countElement = document.getElementById("count");
  const increaseButton = document.getElementById("increase");
  const decreaseButton = document.getElementById("decrease");

  let count = parseInt(countElement.textContent);

  increaseButton.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
  });

  decreaseButton.addEventListener("click", () => {
    if (count > 0) {
      count--;
      countElement.textContent = count;
    }
  });