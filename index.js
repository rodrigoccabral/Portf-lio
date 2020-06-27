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

  function closeNav() {
    var classe1 = document.getElementById('teste');
    document.getElementById("myNav").style.height = "0%";
    classe1.classList.remove('change');
  }

  //form.addEventListener("submit", (e) => {
  function teste(e) {



    //Validação de email
    var email = document.getElementById("email");
    var emailRegEx = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

    var form = document.getElementById("form");
    var errorElement = document.getElementById("error");

    var nome = document.getElementById("name");
    var mensagem = document.getElementById("message");

    let messagens = [];


    if (nome.value == "" || email.value == "" || mensagem.value == "") {

      messagens.push("msg");

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Favor preencher todos os campos!",
      })
      reset();
      return false;

    }

    if (email.value !== "") {
      if (emailRegEx.test(email.value) === false) {
        messagens.push("msg");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Formato de email incorreto!",
        })
        reset();
        return false;


      }

    }
    if (messagens.length > 0) {

      errorElement.innerText = messagens.join(', ');
      return false;

    } else {

      Swal.fire({
        icon: 'success',
        title: 'Mensagem enviada com sucesso!',
        showConfirmButton: false,
        timer: 2000
      })


      return true;
      
      //reset();
      /*$(function() {
        $("form").submit(function(e) {
            e.preventDefault();
            var formData = new FormData($(this));
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbybv1k-jrOvOyiaP85ISVSYmQQXMXyYkW_VGbwEHg/exec',
                type: 'POST',
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function(response) {
                  alert("teste");
                    console.log(response);
                }
            });

        })
        return true;
     });*/
    

    }

  }

  function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
