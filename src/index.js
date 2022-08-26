//variables vacias de los datos a validar
//imprimir resultado
const validarPicoYPlaca = (vehiculo, placa) => {
  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const dia = semana[new Date().getDay()];
  const parrafo = document.getElementById("resultado");

  if (dia === "Lunes" && (placa === "6" || placa === "3")) {
    parrafo.innerHTML = `El número de placa ${placa} tiene Pico y Placa`;
  } else if (dia === "Martes" && (placa === "9" || placa === "8")) {
    parrafo.innerHTML = `El número de placa ${placa} tiene Pico y Placa`;
  } else if (dia === "Miercoles" && (placa === "4" || placa === "5")) {
    parrafo.innerHTML = `El número de placa ${placa} tiene Pico y Placa`;
  } else if (dia === "Jueves" && (placa === "7" || placa === "1")) {
    parrafo.innerHTML = `El número de placa ${placa} tiene Pico y Placa`;
  } else if (dia === "Viernes" && (placa === "2" || placa === "0")) {
    parrafo.innerHTML = `El número de placa ${placa} tiene Pico y Placa`;
  } else {
    parrafo.innerHTML = "no tienes pico y placa";
  }
};

// funcion recolectora de datos
const onSubmitHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  let vehiculo = formProps.vehiculo;
  let placa = formProps.placa;
  validarPicoYPlaca(vehiculo, placa);

  console.log(formProps);
};

// ejemplo del tonto de Yeison
// const week = {
//   [semana[0]]: [],
//   [semana[1]]: ["6", "3"],
//   [semana[2]]: ["9", "8"],
//   [semana[3]]: ["4", "5"],
// };
//
// if (week[dia] && week[dia].some((dayNumber) => dayNumber === placa)) {
//   console.log(`El númeo de placa ${placa} tiene Pico y Placa`);
// } else {
//   console.log("eyyyy men no tienes pico y placa pinche púto");
// }
