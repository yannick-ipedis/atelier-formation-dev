<?php include 'header.php';?>
<body>
  <header>
  <h1 id="titre">Bouton <q>j'aime </q></h1>
  
</header>
<main>
  <div class="container-fluid">

  <div id="imageinformativevrai2" >
    
  <ul class="row">
  <li class="col-lg-3" ><div><img src="image/sneakers.png" aria-describedby="info"></div>
    <p id="info"><h3>Sneaker</h3>
  <div><button onclick="myFunction()" class="button button1" aria-label="aimer cet article">J'aime</button></div>
  
  </li>
  <li class="col-lg-3"><div><img src="image/tee1.png"  aria-describedby="info2"></div>
    <p id="info2"><h3>Debardeur</h3>
    
  <div><button  onclick="myFunction2()" class="button button1" aria-label="aimer cet article">J'aime</button></div>
  </li>
  <li class="col-lg-3">
    <div><img src="image/tee.png" aria-describedby="info3"></div>
     <p id="info3"><h3>Pull</h3>
  <div><button  onclick="myFunction3()" class="button button1" aria-label="aimer cet article">J'aime</button></div>
  </li>
</ul>

<script>
function myFunction() {
  
  //document.getElementsByTagName("button")[3].removeAttribute("class");
 document.getElementsByTagName("button")[0].setAttribute("class", "button button2");


}
function myFunction2() {
 document.getElementsByTagName("button")[1].setAttribute("class", "button button2");
 

}
function myFunction3() {
  document.getElementsByTagName("button")[2].setAttribute("class", "button button2");
 



}
</script>

  
</div>
</main>

<?php include 'footer.php';?>
</body>