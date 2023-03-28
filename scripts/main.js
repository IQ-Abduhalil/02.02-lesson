var body = document.querySelector("body");
var checkbox = document.querySelector(".darklight-btn");
checkbox.addEventListener("change", function (e) {
  if (e.target.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
