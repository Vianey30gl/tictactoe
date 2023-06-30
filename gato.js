let td = document.getElementsByClassName("td")
let inti = document.getElementById("ganador")
let inti1 = document.getElementById("perdedor")

let loiV= []
console.log(td)
for (let i = 0; i< td.length; i++) {
   
td[i].addEventListener("click", function () {

    if (td[i].textContent==="") {
        console.log("aqui") 
        td[i].innerHTML="X"
        loiV.push(i);
        campos()
      }
    ganar()
  })
}
//Funciones
 function campos() {

for (let i = 0; i < 9; i++) {

    if (td[i].textContent==="") {

        console.log("vacio")   
    } 
}
let fun = cateM()

console.log(fun)
// FALTA 

 setTimeout(() =>{
    td[fun].innerHTML="O"
},1000);
loiV.push(fun)

}

function cateM(){
    let loiV2= []
    //en lugar del 9 va un td.length
for (let j = 0; j< 9; j++) {
    loiV2.push(j)


   if (td[j].textContent==="") {
    
     loiV2.push(j)
   }

 }
 let mat = Math.floor(Math.random()*loiV2.length)


 return loiV2[mat]

}

function ganar() {
    let ganaste = false;
    let perdiste = false;
  
    switch (true) {
      case (td[0].textContent === "X" && td[1].textContent === "X" && td[2].textContent === "X"):
      case (td[3].textContent === "X" && td[4].textContent === "X" && td[5].textContent === "X"):
      case (td[6].textContent === "X" && td[7].textContent === "X" && td[8].textContent === "X"):
      case (td[0].textContent === "X" && td[3].textContent === "X" && td[6].textContent === "X"):
      case (td[1].textContent === "X" && td[4].textContent === "X" && td[7].textContent === "X"):
      case (td[2].textContent === "X" && td[5].textContent === "X" && td[8].textContent === "X"):
      case (td[0].textContent === "X" && td[4].textContent === "X" && td[8].textContent === "X"):
      case (td[2].textContent === "X" && td[4].textContent === "X" && td[6].textContent === "X"):
        ganaste = true;
        break;
      default:
        perdiste = true;
        break;
    }
  
    if (ganaste) {
      inti.innerHTML = "GANASTE ";
    } else if (perdiste) {
      perdedor();
    }
  }
  
  function perdedor() {
    let perdiste = false;
  
    switch (true) {
      case (td[0].textContent === "O" && td[1].textContent === "O" && td[2].textContent === "O"):
      case (td[3].textContent === "O" && td[4].textContent === "O" && td[5].textContent === "O"):
      case (td[6].textContent === "O" && td[7].textContent === "O" && td[8].textContent === "O"):
      case (td[0].textContent === "O" && td[3].textContent === "O" && td[6].textContent === "O"):
      case (td[1].textContent === "O" && td[4].textContent === "O" && td[7].textContent === "O"):
      case (td[2].textContent === "O" && td[5].textContent === "O" && td[8].textContent === "O"):
      case (td[0].textContent === "O" && td[4].textContent === "O" && td[8].textContent === "O"):
      case (td[2].textContent === "O" && td[4].textContent === "O" && td[6].textContent === "O"):
        perdiste = true;
        break;
    }
  
    if (perdiste) {
      inti1.innerHTML = "PERDISTE";
    }
  }
  //Reinicio

  let btnreinicio = document.getElementById("btn");
  btnreinicio.addEventListener("click", reset);

  function reset() {
    window.location.reload();
  }
