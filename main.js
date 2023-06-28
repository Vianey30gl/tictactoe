// Let 
 let btnRef = document.querySelectorAll("boton");
 let textos1 = document.querySelector("textos1");
 let nuevojuegoBtn = document.getElementById("nuevo-juego");
 let ReiniciarBtn = document.getElementById("reiniciar");
 let msjRef = document.getElementById("mensaje");
  
 // Disableboton 
      const disabledboton = () => {
         btnRef.forEach((Element) => (Element.disabled = true));

         popupRef.classList.remove("hide");
      };

 //botones de nuevo juego y reiniciar
    const enableButtons = () => {
        btnRef.forEach ((Element) =>{
            Element.innerText= "";
            Element.disabled = false;
        });
 //Disable P

    popupRef.classList.add("hide");
  }; 

 //Nuevo juego
  nuevojuegoBtn.add('Click', () => {
    count= 0;
    enableButtons();
  });
  ReiniciarBtn.addEventListener('Click', ()=> {
  count = 0
  enableButtons();
 });

 //const cuafunction
    const cuafunction = (letter) => {
        disabledboton();
    };

 // Funcion cuadros 

   let cuadros = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
 ];

 //Jugador x

   let turnox = true;
   let count = 0;
 
   // Logica Cuadros
   const cuadroscheck = () =>{
       for(let i of cuadros){
        let [Element1, Element2,Element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
      
        if(Element1  != "" && Element2 != "" & Element3){
            if(Element1 == Element2 && Element2 == Element3){
                    cuafunction (Element1);
            }
        }
    }
   };
 // Display X/O click

   btnRef.forEach((Element) =>{
     Element.addEventListener('click',() =>{
        if (turnox) {
            turnox = false;
// Display x
        Element.innerText = "x";
        Element.disabled = true;
        } else {
        turnox = true;
// Display o
        Element.innerText = "O";
        Element.disabled = true;
        }
//incrementar con click
    count += 1;
    if (count === 9){
    }
//   //

   cuadroscheck ();
     })

 })