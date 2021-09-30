let accordion = document.getElementsByClassName("accordion");
// let panels = document.getElementsByClassName("panel");
let index;
for (index = 0; index < accordion.length; index++) {
  accordion[index].addEventListener("click", function() {
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}