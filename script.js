const counter = document.querySelectorAll('.counter');

counter.forEach((i) => {
  let count = 0;

  let int = setInterval(counting);

  function counting() {
    const target = +i.dataset.target;

    const increment = target / 100;

    count += increment;
    if (count >= target) {
      clearInterval(int);
    }
    i.innerHTML = Math.ceil(count);
  }
});
