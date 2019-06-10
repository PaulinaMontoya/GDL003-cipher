window.cipher = {
  encode: function encode(toCodi, shift){

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

  decode: function decode(toDeco, shift){

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

/*
console.log (x);

FORMULA FLORE

  encode: function(toCodi, shift){
let x = toCodi.value;
let result = "";
for (let i = 0; i < x.lenght; i++) {
          let c = x[i].charCodeAt(0);
              if(c >= 65 && c <=  90) {
             let form = ((c - 65 + parseInt(shift.value)) % 26 + 65);
             result =  x[i].fromCharCode(form);
        }
     }
   return result;
  }
}
*/
