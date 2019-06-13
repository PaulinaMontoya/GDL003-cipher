window.cipher = {

  encode:(shift, toCodi) => {

  let result = "";
  for (let i = 0; i < toCodi.length; i++) {
        let c = toCodi[i].charCodeAt(0);
            if(c >= 97 && c <=  122) {
              let lower = (c - 97 + parseInt(shift)) % 26 + 97;
              let codificado = String.fromCharCode(lower);
              result += codificado;
            }
            else if(c >= 65 && c <=  90) {
              let upper = (c - 65 + parseInt(shift)) % 26 + 65;
              let codificado = String.fromCharCode(upper);
              result += codificado;
            }
            else if(c == 32) {
              let space = " ";
              result+=space;
            }
     }
   return result;
  },

  decode:(shift, toDeco) => {

    let result = "";
    for (let i = 0; i < toDeco.length; i++) {
          let c = toDeco[i].charCodeAt(0);
          if(c >= 97 && c <=  122) {
            let lower = (c + 97 - parseInt(shift)+14) % 26 + 97;
            let decodificado = String.fromCharCode(lower);
            result += decodificado;
          }
          else if(c >= 65 && c <=  90) {
            let upper = (c + 65 - parseInt(shift)) % 26 + 65;
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
