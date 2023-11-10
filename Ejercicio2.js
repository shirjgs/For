//3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

// Definir el arreglo
var miArray = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

// Recorrer el arreglo y mostrar solo los elementos que son tipo número
for (var i = 0; i < miArray.length; i++) {
  if (typeof miArray[i] === 'number') {
    console.log(miArray[i]);
  }
}
