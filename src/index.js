let nameUser = document.getElementById("userbox");
let toCodi = document.getElementById("codibox");
let toDeco = document.getElementById("decobox");
let shift = document.getElementById("numberday");
const showCodi = document.getElementById("buttoncodi");


  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";

function enter() {
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";

 }

 function nextday() {
   first.style.display = "none";
   second.style.display = "none";
   third.style.display = "block";
   fourth.style.display = "none";
   fifth.style.display = "none";
  }

  function nextcodi() {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
    fifth.style.display = "none";
    document.getElementById("usernamecodi").innerHTML = nameUser.value;
      document.getElementById("coditext").innerHTML=window.cipher.encode(toCodi, shift);

  //  document.write(window.cipher.encode());
//    showCodi.addEventListener("click",function(){document.getElementById("coditext").innerHTML =(window.cipher.encode())});
}



  function nextdeco() {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "block";
    document.getElementById("usernamedeco").innerHTML = nameUser.value;
    document.getElementById("decotext").innerHTML = toDeco.value;
   }

  function close() {
    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
  }

function backfirst(){
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";
}
