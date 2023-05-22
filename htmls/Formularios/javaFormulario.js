
const form = document.querySelector('form');
const diaSelect = document.getElementById('dia');
const mesSelect = document.getElementById('mes');
const anioSelect = document.getElementById('anio');


for (let i = 1; i <= 31; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i;
  diaSelect.add(option);
}

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
for (let i = 0; i < meses.length; i++) {
  const option = document.createElement('option');
  option.value = i + 1;
  option.text = meses[i];
  mesSelect.add(option);
}

const anioActual = new Date().getFullYear();
for (let i = anioActual; i >= 1900; i--) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i;
  anioSelect.add(option);
}


form.addEventListener('submit', (event) => {
  event.preventDefault();


  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dia = document.getElementById('dia').value;
  const mes = document.getElementById('mes').value;
  const anio = document.getElementById('anio').value;

  const fecha_nacimiento = anio + '-' + mes + '-' + dia;

  
  window.location.replace('confirmacion.html');
});
