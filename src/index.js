let nameUser = document.getElementById("userbox");
let toCodi = document.getElementById("codibox").value;
let toDeco = document.getElementById("decobox").value;
let shift = document.getElementById("numberday").value;
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");


  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";

const enter = () => {
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";
};


const nextday = () => {

   first.style.display = "none";
   second.style.display = "none";
   third.style.display = "block";
   fourth.style.display = "none";
   fifth.style.display = "none";
 };


 const nextcodi = () => {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
    fifth.style.display = "none";
    document.getElementById("usernamecodi").innerHTML = nameUser.value;
    document.getElementById("coditext").innerHTML = window.cipher.decode(toCodi, shift);
  };


  const nextdeco = () => {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "block";
    document.getElementById("usernamedeco").innerHTML = nameUser.value;
    document.getElementById("decotext").innerHTML =  window.cipher.encode(toDeco, shift);
  };


  const backfirst = () => {
    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
  };


  let buttonEnter = document.getElementById("buttonenter");
  buttonEnter.addEventListener("click", enter);
  let buttonNextday = document.getElementById("nextday");
  buttonNextday.addEventListener("click", nextday);
  let buttonCodi = document.getElementById("buttoncodi");
  buttonCodi.addEventListener("click", nextcodi);
  let buttonDeco = document.getElementById("buttondeco");
  buttonDeco.addEventListener("click", nextdeco);
  let buttonBackFirst1 = document.getElementById("backfirst1");
  buttonBackFirst1.addEventListener("click", backfirst);
  let buttonBackFirst2 = document.getElementById("backfirst2");
  buttonBackFirst2.addEventListener("click", backfirst);
