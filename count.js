let count1 = 0;
let counterDom = document.getElementById("count1");
let decreaseDom = document.getElementById("decrease");
let increaseDom = document.getElementById("increase");

increaseDom.addEventListener("click", clickEvent);
decreaseDom.addEventListener("click", clickEvent);

function clickEvent() {
  console.log(this.id);
  this.id == "increase" ? (count1 += 1) : (count1 -= 1);
  counterDom.innerHTML = count1;
}
