window.cipher = {

  encode:(toCodi, shift) => {

  let x = toCodi.value;
  let result = "";
  for (let i = 0; i < x.length; i++) {
        let c = x[i].charCodeAt(0);
            if(c >= 97 && c <=  122) {
              let lower = (c - 97 + parseInt(shift.value)) % 26 + 97;
              let codificado = String.fromCharCode(lower);
              result += codificado;
            }
            else if(c >= 65 && c <=  90) {
              let upper = (c - 65 + parseInt(shift.value)) % 26 + 65;
              let codificado = String.fromCharCode(upper);
              result += codificado;
            }
            else if(c == 32) {
              let space = " ";
              result+=space;
            }
            else if(c >= 48 && c <= 57) {
              let number = (c - 48 + parseInt(shift.value)) % 26 + 48;
              let codificado = String.fromCharCode(number);
              result += codificado;
            }
     }
   return result;
  },

  decode:(toDeco, shift) => {

    let x = toDeco.value;
    let result = "";
    for (let i = 0; i < x.length; i++) {
          let c = x[i].charCodeAt(0);
          if(c >= 97 && c <=  122) {
            let lower = (c + 97 - parseInt(shift.value)+14) % 26 + 97;
            let decodificado = String.fromCharCode(lower);
            result += decodificado;
          }
          else if(c >= 65 && c <=  90) {
            let upper = (c + 65 - parseInt(shift.value)) % 26 + 65;
            let decodificado = String.fromCharCode(upper);
            result += decodificado;
          }
          else if(c == 32) {
            let space = " ";
            result+=space;
          }
     }
     return result;
    }
};
