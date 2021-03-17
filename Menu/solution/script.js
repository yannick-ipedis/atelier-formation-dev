const menuitem = document.getElementById("submenu");

menuitem.onclick = function(){
  if(!menuitem.classList.contains("active")){
    menuitem.classList.add("active");
    menuitem.setAttribute("aria-expanded",true);
  }
  else{
    menuitem.classList.remove("active");
    menuitem.setAttribute("aria-expanded",false);
  }  
}