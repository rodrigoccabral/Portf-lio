  /*Transição de paginas*/

  const swup = new Swup();
   
  /*Hamburger*/

  function myFunction(x) {
    var classe1 = document.getElementsByClassName('container change');
  
    x.classList.toggle("change");
  
    if (classe1.length > 0) {
        document.getElementById("myNav").style.height = "100%";
  } else {
      document.getElementById("myNav").style.height = "0%";
  }
  
  }

