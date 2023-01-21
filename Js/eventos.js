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

/*botón ver sitio web*/
document.getElementById('boton-web').addEventListener('click', function(){
  var win = window.open('http://guiagalvez.com.ar/cristian', '_blank');
  // Cambiar el foco al nuevo tab (punto opcional)
  win.focus();
})

/*botón ver redes sociales*/
document.getElementById('boton-redes').addEventListener('click', function(){
  var win = window.open('#redessociales', '_blank');
  // Cambiar el foco al nuevo tab (punto opcional)
  win.focus();
})

