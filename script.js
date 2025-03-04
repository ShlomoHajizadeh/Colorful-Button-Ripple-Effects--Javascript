let btn = document.querySelectorAll(".btn");
btn.forEach((btn) => {
  btn.onclick = function (e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    ripples.style.borderColor = color;
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 2000);
  };
});
