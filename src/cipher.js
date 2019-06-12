window.cipher = {
<<<<<<< HEAD
  
  encode:(toCodi, shift) => {
=======

  encode: (shift, toCodi) => {

  let result = "";
  for (let i = 0; i < toCodi.length; i++) {
        let c = toCodi[i].charCodeAt(0);
            if(c >= 97 && c <=  122) {
              let lower = (c - 97 + parseInt(shift)) % 26 + 97;
              let codificado = String.fromCharCode(lower);
              result += codificado;
        }
     }
   return result;
  },

  decode:(shift, toCodi) => {

    let result = "";
    for (let i = 0; i < toDeco.length; i++) {
          let c = toDeco[i].charCodeAt(0);
          if(c >= 97 && c <=  122) {
                let lower = (c + 97 - parseInt(shift) +14 ) % 26 + 97;
                let decodificado = String.fromCharCode(lower);
                result += decodificado;
          }
       }
     return result;
    }
};


/*
PARA AGREGAR ESPACIOS
else if(c == 32) {
  let space = " ";
result = c  space;
}

PARA MAYUSCULAS CIFRADO
else if(c >= 65 && c <=  90) {
  let upper = (c - 65 + parseInt(shift)) % 26 + 65;
  let codificado = String.fromCharCode(upper);
  result += codificado;
}

PARA MAYUSCULAS DECIFRADO
else if(c >= 65 && c <=  90) {
  let upper = (c + 65 - parseInt(shift)) % 26 + 65;
  let decodificado = String.fromCharCode(upper);
  result += decodificado;
  }
*/

/*

window.cipher = {
  encode: function encode(toCodi, shift){
>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af

  let x = toCodi.value;
  let result = "";
  for (let i = 0; i < x.length; i++) {
        let c = x[i].charCodeAt(0);
            if(c >= 97 && c <=  122) {
              let form = (c - 97 + parseInt(shift.value)) % 26 + 97;
              let codificado = String.fromCharCode(form);
              result += codificado;
        }
     }
   return result;
  },

<<<<<<< HEAD
  decode:(toDeco, shift) => {
=======
  decode: function decode(toDeco, shift){
>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af

    let x = toDeco.value;
    let result = "";
    for (let i = 0; i < x.length; i++) {
          let c = x[i].charCodeAt(0);
          if(c >= 97 && c <=  122) {
            let form = (c + 97 - parseInt(shift.value) +14 ) % 26 + 97;
            let decodificado = String.fromCharCode(form);
                result += decodificado;
          }
       }
     return result;
    }
};
<<<<<<< HEAD

/*
console.log (x);
=======
>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af

*/
