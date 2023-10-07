// Write your code here
const sub = document.querySelector(".subtitle");
const bulbs = document.querySelectorAll(".lightbulb");

let count = 0;

bulbs.forEach((bulb) => {
  bulb.addEventListener("mouseenter", () => {
    bulb.classList.toggle("active");
    count++;

    count === 1
      ? (sub.innerHTML = `You've clicked the lightbulbs ${count} time`)
      : (sub.innerHTML = `You've clicked the lightbulbs ${count} times`);
  });
});
