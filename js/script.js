$(document).ready(function(){


  $("#btn-alerta").click(function(){
    alert("¡Bienvenida a tu perfil!");
  });


  $("#btn-color").click(function(){
    let nuevoColor = "lightblue";
    $("body").css("background-color", nuevoColor);
    localStorage.setItem("bgColor", nuevoColor);
  });

  $("#btn-parrafo").click(function(){
    $("#descripcion").text("Este texto ha sido cambiado con jQuery.");
  });

  
  let guardado = localStorage.getItem("bgColor");
  if(guardado){
    $("body").css("background-color", guardado);
  }

  $("#form-perfil").submit(function(e){
    e.preventDefault();
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let bio = $("#bio").val();

    if(!nombre || !correo || !bio){
      alert("Todos los campos son obligatorios");
      return;
    }


    localStorage.setItem("perfil", JSON.stringify({nombre, correo, bio}));
    alert("Datos guardados");
    

    $("#lista-dinamica").append("<li>"+nombre+"</li>");
  });

  let datos = localStorage.getItem("perfil");
  if(datos){
    let perfil = JSON.parse(datos);
    $("#nombre").val(perfil.nombre);
    $("#correo").val(perfil.correo);
    $("#bio").val(perfil.bio);
  }
});
