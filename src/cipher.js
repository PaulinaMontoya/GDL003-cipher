window.cipher = {
  encode: function(toCodi, shift){

let x = toCodi.value;
let result = "";
for (let i = 0; i < x.length; i++) {
          let c = x[i].charCodeAt(0);
              if(c >= 97 && c <=  122) {
            let form = (c - 65 + parseInt(shift.value)) % 26 + 65;
            let codificado = String.fromCharCode(form);
            result += codificado;
        }
     }
   return result;
  }
}


/*

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
