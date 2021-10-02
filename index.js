const accordion = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName('panel');
  
for (let index = 0; index < accordion.length; index++) {
  accordion[index].onclick = function() {
    let setClasses = !this.classList.contains('active');
    setClass(accordion, 'active', 'remove');
    setClass(panel, 'show', 'remove');
  
    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
}
  
function setClass(els, className, fnName) {
  for (let index = 0; index < els.length; index++) {
    els[index].classList[fnName](className);
  }
}
