/*  Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.Consigli :
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*fate sempre una cosa alla volta (in quel caso se partite con i prompt potrebbe incasinarsi nelle tempistiche di aggiornamento dom e visualizzazione del prompt stesso [soprattutto in chrome]).  */


const btnstart = document.getElementById("start");
const RandNum = document.getElementById("numbers");
let invia = document.getElementById("btn-invia");


function ArrNumbRandom(min, max) {
    return Math.floor(Math.random() * (50 - 1 + 1) ) + 1;
}

function generaMinMax(min,max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min))

   }
    function generaArrayNrRandom(quanti,numMin,numMax){
        const ARRAYNUMERI=[];
    while ((ARRAYNUMERI.length) < quanti){
        let nuovoNumero= generaMinMax(numMin,numMax);
        if ( !ARRAYNUMERI.includes(nuovoNumero)){
            ARRAYNUMERI.push(nuovoNumero);
        }
    }
    return ARRAYNUMERI
}

btnstart.addEventListener("click",
    function() {
        let ArrNumber = generaArrayNrRandom(5,1,50);
        console.log(ArrNumber);
        RandNum.innerHTML += `<div>${ArrNumber}</div>`
        setTimeout(() => {
            const box = document.getElementById('numbers');
            box.style.display = 'none';

            let inputBox = document.getElementById("input-box").style.display = "block";
          }, 30000); 


    invia.addEventListener("click",
        function(){

    

            let input1 = parseInt(document.getElementById("input1").value)
            let input2 = parseInt(document.getElementById("input2").value)
            let input3 = parseInt(document.getElementById("input3").value)
            let input4 = parseInt(document.getElementById("input4").value)
            let input5 = parseInt(document.getElementById("input5").value)

            let arrayUtente = [input1,input2,input3,input4,input5];
            console.log(arrayUtente)


 
    let numeriInComune = ArrNumber.filter(x => arrayUtente.includes(x));
    console.log(numeriInComune)
    
    if (numeriInComune.length === 5) {
        
        document.getElementById("risultato").innerHTML = `Hai Vinto indovinando tutti e 5 i numeri!!!`

    }
    
    else if (numeriInComune.length === 0) {

        document.getElementById("risultato").innerHTML = `peccato  il tuo risultatato è 0`

    }
    
    else {

        document.getElementById("risultato").innerHTML = `hai indovinato solo ${numeriInComune.length} numeri. Questi sono i numeri che hai indovinato ${numeriInComune}. Purtroppo non sei riuscito a battere Simon, Riprova`
    }

    }

    );
    }
);
