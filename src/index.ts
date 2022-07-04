// Dados un arreglo de texto y dos arreglos de enteros de tamaño n:
// - nombres como texto
// - años como entero y altura como entero
// Ordenelos los tres vectores a la vez segun los años, y en caso que haya un empate, utilice la altura para desempatar.
// Tener en cuenta que los intercambios tienen que cambiar los elementos de los tres vectores a la vez.

let vectorNombres: string[] = new Array(0);
let vectorAnios: number[] = new Array(0);
let vectorAltura: number[] = new Array(0);
let nElementos: number = 0;

function cargarVectores(nombres: string[], anios: number[], altura: number[]) {
  nElementos = Number(prompt("Indique la cantidad de usuarios a ingresar: "));
  for (let i = 0; i < nElementos; i++) {
    nombres[i] = String(
      prompt("Usuario " + (i + 1) + ". Ingrese el nombre del usuario: ")
    );
    anios[i] = Number(prompt("Ingrese la edad: "));
    altura[i] = Number(prompt("Ingrese la altura: "));
  }
}

function comparador(anios: number[], altura: number[], i: number) {
  let comparacion: number = 0;

  if (anios[i] > anios[i + 1]) {
    comparacion = 1;
  } else if (anios[i] === anios[i + 1]) {
    if (altura[i] > altura[i + 1]) {
      comparacion = 1;
    } else if (altura[i] < altura[i + 1]) {
      comparacion = -1;
    }
  } else {
    comparacion = -1;
  }

  return comparacion;
}

function intercambiarValores(array: any[], x: number, y: number) {
  let aux: any;
  aux = array[x];
  array[x] = array[y];
  array[y] = aux;
}

function ordenarVectores(
  nombres: string[],
  anios: number[],
  altura: number[],
  dimension: number
) {
  for (let i = 0; i < dimension - 1; i++) {
    for (let j = 0; j < dimension - 1 - i; j++) {
      if (comparador(anios, altura, j) === 1) {
        intercambiarValores(anios, j, j + 1);
        intercambiarValores(nombres, j, j + 1);
        intercambiarValores(altura, j, j + 1);
      }
    }
  }
}

cargarVectores(vectorNombres, vectorAnios, vectorAltura);
// Metodo burbuja (sort)
ordenarVectores(vectorNombres, vectorAnios, vectorAltura, nElementos);

console.log(vectorNombres, vectorAnios, vectorAltura);
