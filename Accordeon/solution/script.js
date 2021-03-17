var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
   
    if (this.getAttribute("aria-expanded") == "true") {
       this.setAttribute("aria-expanded", "false");
    } else {
       this.setAttribute("aria-expanded", "true");
    }
  }
}