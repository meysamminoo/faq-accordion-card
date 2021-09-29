let accordion = document.getElementsByClassName("accordion");
let Index;

for (Index = 0; Index < accordion.length; Index++) {
  accordion[Index].addEventListener("click", function() {
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