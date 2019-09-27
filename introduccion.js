var texto =
  "Hola mi nombre es Cristian Salazar y  mi numero de ceular es 987654321 y mi otro numero es 123456789" +
  "además tengo 25años y soy Co-founder de cultivartec";

console.log("edad :" + texto.match(/[ ]([0-9]{2})[a]/)[1]);
//celulares
texto.match(/[0-9]{9}/g);
