/* obtener IP del visitante */
async function getIpClient() {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
getIpClient();

/* función barra de navegación, la obtuve de w3school
cambia la clase de la barra de navegación a modo responsive y viceversa*/
function funcionBarraNavegacion() {
  var x = document.getElementById("myTopnav");
  if (x.className === "barra-navegacion") {
    x.className += " responsive";
  } else {
    x.className = "barra-navegacion";
  }
}