const secondi = 30;

document.querySelector("h1").innerHTML = `
hai ${secondi} secondi per memorizzare questi numeri`

let numeriCasuali = [];
numeriCasuali = numberGenerator(numeriCasuali);


setTimeout(inizioGioco, secondi * 100);


function numberGenerator(array){
    let codeHTMLSpan = "";
    
    for(let i = 0; i < 5; i++){
        array.push(Math.floor(Math.random() * 101));
        codeHTMLSpan += `${array[i]}, `
    }
    document.querySelector("span").innerHTML = codeHTMLSpan;

    return array;
}

function inizioGioco(){
    let count = 0;
    let risposta;

    console.log(numeriCasuali);
    for(let i = 0; i < numeriCasuali.length; i++){
        risposta = prompt("Inserisci il numero " + [i+1]);
        if(numeriCasuali[i] == risposta){
            count++;
        }
    }

    if(count == 5){
        alert("WOW HAI INDOVINATO TUTTI I NUMERI");
    }else{
        if(count > 3 && count != 5){
            alert("Bravo hai indovinato " + count + " numeri");
        }else{
            alert("Malino. Hai indovinato " + count + " numeri");
        }
    }

    if(prompt("Vuoi riprovare? si / no") == "si"){
        count = 0;
        numeriCasuali = [];
        numeriCasuali = numberGenerator(numeriCasuali);
        setTimeout(inizioGioco, secondi * 100);
    }
}