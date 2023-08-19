  var form = document.forms['form']
  var btnSub = document.getElementById("sig");
  var formSurvey = document.getElementById("myform")


  // form.onsubmit = function (e) {
  //   btnSub.style.display = "none";
  //   btnSub.disabled = true;
  //   document.getElementById("spinner").style.display = "flex";
  //   e.preventDefault();
  //   var dni = document.getElementById("dni").value;
  //   console.log(dni);
    


  //   db.collection("BaseOslo").doc("BaseEncuestados").get().then((doc) => {
  //     if (doc.exists) {
  //       // Obtener el número total de registros
  //       const data = doc.data();
  //       const totalRegistros = Object.keys(data).filter(key => key.startsWith('registro')).length;

  //       encontro = false;

  //       for (let i = 1; i <= totalRegistros; i++) {
  //         if (data[`registro${i}`] && data[`registro${i}`].NOMBRE_COMPLETO && data[`registro${i}`].NU_DOCU_IDEN === dni) {
  //           console.log(data[`registro${i}`].NOMBRE_COMPLETO);
  //           toastr.success('Bienvenido');
  //           document.getElementById("dniuser").setAttribute('value', data[`registro${i}`].NU_DOCU_IDEN);
  //           document.getElementById("nombre").setAttribute('value', data[`registro${i}`].NOMBRE_COMPLETO);
  //           document.getElementById("content-g").style.display = "none";
  //           document.getElementById("content2").style.display = "flex";
        
  //           encontro = true; // Se encontró un registro coincidente
  //           const inputs = document.querySelectorAll(".question-design");
            
  //           anime({
  //             targets: inputs,
  //             translateX: [-120, 0],
  //             opacity: [0, 1],
  //             delay: anime.stagger(100, {start: 350}),
  //           });
  //         }
  //       }
        
  //       if (!encontro) {
  //         console.log("El documento no existe");
  //         btnSub.disabled = false;
  //         toastr.error('no se encontró el DNI');
  //         document.getElementById("spinner").style.display = "none";
  //         btnSub.style.display = "inline-block";

  //       }
        
  //     } else {
  //       console.log("No existe registros");
  //     }
  //   }).catch((error) => {
  //     console.log("Error al obtener el documento:", error);
  //   });

    
    
    
    
  // }
  

  form.onsubmit = function (e) {
    
  }