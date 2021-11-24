let numeriCasuali = [];
numeriCasuali = numberGenerator(numeriCasuali);

setTimeout(inizioGioco, setTime() * 100);

function numberGenerator(array){
    // let numeriCasuali = [];
    let codeHTMLSpan = "";
    
    for(let i = 0; i < 5; i++){
        array.push(Math.floor(Math.random() * 101));
        codeHTMLSpan += `${array[i]}, `
    }
    document.querySelector("span").innerHTML = codeHTMLSpan;

    return array;
}

function setTime(){
    const secondi = 30;

    document.querySelector("h1").innerHTML = `
    hai ${secondi} secondi per memorizzare questi numeri
    `
    return secondi;
}

function inizioGioco(){
    // let prova = numberGenerator();
    let count = 0;
    let risposta;

    console.log(numeriCasuali);
    for(let i = 0; i < numeriCasuali.length; i++){
        risposta = prompt("Inserisci il numero " + [i+1]);
        
        for(let j = 0; j < numeriCasuali.length; j++){
            if(numeriCasuali[j] == risposta){
                count++;
            }
        }
    }
    console.log(numeriCasuali);

    if(count == 5){
        return alert("WOW HAI INDOVINATO TUTTI I NUMERI");
    }
    if(count > 3){
        return alert("Bravo hai indovinato " + count + " numeri");
    }
    return alert("Malino. Hai indovinato " + count + " numeri");
}