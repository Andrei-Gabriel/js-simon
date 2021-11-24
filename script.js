setTimeout(inizioGioco(), setTime() * 1000);

numberGenerator();
setTime();


function numberGenerator(){

    let numeriCasuali = [];
    let codeHTMLSpan = "";
    
    for(let i = 0; i < 5; i++){
        numeriCasuali.push(Math.floor(Math.random() * 101));
        codeHTMLSpan += `${numeriCasuali[i]}, `
    }
    console.log("numeriCasuali =", numeriCasuali);
    document.querySelector("span").innerHTML = codeHTMLSpan;

    return numeriCasuali;
}

function setTime(){
    const secondi = 30;

    document.querySelector("h1").innerHTML = `
    hai ${secondi} secondi per memorizzare questi numeri
    `
    return secondi;
}

function inizioGioco(){
    return 0;
}