// Dados un arreglo de texto y dos arreglos de enteros de tamaño n:
// - nombres como texto
// - años como entero y altura como entero
// Ordenelos los tres vectores a la vez segun los años, y en caso que haya un empate, utilice la altura para desempatar.
// Tener en cuenta que los intercambios tienen que cambiar los elementos de los tres vectores a la vez.

let vectorNombres: string[] = new Array("");
let vectorAños: number[] = new Array(0);
let vectorAltura: number[] = new Array(0);
let nElementos: number = 0;
let aux, aux1, aux2;
function cargarVectores(nombres: string[], años: number[], altura: number[]) {
  nElementos = Number(prompt("Indique la cantidad de usuarios a ingresar: "));
  for (let i = 0; i < nElementos; i++) {
    nombres[i] = String(
      prompt("Usuario " + (i + 1) + ". Ingrese el nombre del usuario: ")
    );
    años[i] = Number(prompt("Ingrese la edad: "));
    altura[i] = Number(prompt("Ingrese la altura: "));
  }
}
cargarVectores(vectorNombres, vectorAños, vectorAltura);
// Metodo burbuja (sort)
for (let i = 0; i < nElementos - 1; i++) {
  for (let j = 0; j < nElementos - 1; j++) {
    if (vectorAños[j] > vectorAños[j + 1]) {
      aux = vectorAños[j];
      aux1 = vectorNombres[j];
      aux2 = vectorAltura[j];
      vectorAños[j] = vectorAños[j + 1];
      vectorNombres[j] = vectorNombres[j + 1];
      vectorAltura[j] = vectorAltura[j + 1];
      vectorAños[j + 1] = aux;
      vectorNombres[j + 1] = aux1;
      vectorAltura[j + 1] = aux2;
    } else if (
      vectorAños[j] === vectorAños[j + 1] &&
      vectorAltura[j] > vectorAltura[j + 1]
    ) {
      aux = vectorAltura[j];
      aux1 = vectorNombres[j];
      vectorAltura[j] = vectorAltura[j + 1];
      vectorNombres[j] = vectorNombres[j + 1];
      vectorAltura[j + 1] = aux;
      vectorNombres[j + 1] = aux1;
    }
  }
}
console.log(vectorNombres, vectorAños, vectorAltura);
