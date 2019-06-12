let nameUser = document.getElementById("userbox");
<<<<<<< HEAD
let toCodi = document.getElementById("codibox");
let toDeco = document.getElementById("decobox");
let shift = document.getElementById("numberday");
=======
let toCodi = document.getElementById("codibox").value;
let toDeco = document.getElementById("decobox").value;
let shift = document.getElementById("numberday").value;
>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af
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

<<<<<<< HEAD


=======
>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af
const enter = () => {
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  fourth.style.display = "none";
  fifth.style.display = "none";
<<<<<<< HEAD
 };



 const nextday = () => {
=======
};


const nextday = () => {

>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af
   first.style.display = "none";
   second.style.display = "none";
   third.style.display = "block";
   fourth.style.display = "none";
   fifth.style.display = "none";
<<<<<<< HEAD
  };



  const nextcodi = () => {
=======
 };


 const nextcodi = () => {
>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
    fifth.style.display = "none";
    document.getElementById("usernamecodi").innerHTML = nameUser.value;
<<<<<<< HEAD
    document.getElementById("coditext").innerHTML = window.cipher.encode(toCodi, shift);
  };



=======
    document.getElementById("coditext").innerHTML = window.cipher.decode(toCodi, shift);
  };


>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af
  const nextdeco = () => {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "block";
    document.getElementById("usernamedeco").innerHTML = nameUser.value;
<<<<<<< HEAD
    document.getElementById("decotext").innerHTML =  window.cipher.decode(toDeco, shift);
   };



=======
    document.getElementById("decotext").innerHTML =  window.cipher.encode(toDeco, shift);
  };


>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af
  const backfirst = () => {
    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
    fifth.style.display = "none";
  };

<<<<<<< HEAD
  let buttonEnter = document.getElementById("buttonenter");
  buttonEnter.addEventListener("click", enter);
  let buttonDay = document.getElementById("buttonday");
  buttonDay.addEventListener("click", nextday);
=======

  let buttonEnter = document.getElementById("buttonenter");
  buttonEnter.addEventListener("click", enter);
  let buttonNextday = document.getElementById("nextday");
  buttonNextday.addEventListener("click", nextday);
>>>>>>> 61638630c2f50402942dd8685baa116f5ef150af
  let buttonCodi = document.getElementById("buttoncodi");
  buttonCodi.addEventListener("click", nextcodi);
  let buttonDeco = document.getElementById("buttondeco");
  buttonDeco.addEventListener("click", nextdeco);
  let buttonBackFirst1 = document.getElementById("backfirst1");
  buttonBackFirst1.addEventListener("click", backfirst);
  let buttonBackFirst2 = document.getElementById("backfirst2");
  buttonBackFirst2.addEventListener("click", backfirst);
