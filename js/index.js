var btn = document.querySelector('.show-or-hide');
var btnOne = document.querySelector('.show-or-hide-one');
var btnTwo = document.querySelector('.show-or-hide-two');
var btnThree = document.querySelector('.show-or-hide-three');

var hide = document.querySelector("#classificar");
var hideOne = document.querySelector("#cards");
var hideTwo = document.querySelector("#bloco");
var hideThree = document.querySelector("#creat");
var show = document.querySelector(".show");



btn.addEventListener('click', function() {


    if(hide.style.display === 'flex') {
        (hide.style.display = 'none') + (hideOne.style.display = 'none') + (hideTwo.style.display = 'none') + (hideThree.style.display = 'none') + (show.style.display = 'block');
    } else {
        (hide.style.display = 'flex') + (hideOne.style.display = 'none') + (hideTwo.style.display = 'none') + (hideThree.style.display = 'none') +  (show.style.display = 'none') ;
    }
});
btnOne.addEventListener('click', function() {

    if(hideOne.style.display === 'flex') {
        (hideOne.style.display = 'none') + (hide.style.display = 'none') + (hideTwo.style.display = 'none') + (hideThree.style.display = 'none') + (show.style.display = 'block');
    } else {
        (hideOne.style.display = 'flex') + (hide.style.display = 'none') + (hideTwo.style.display = 'none') + (hideThree.style.display = 'none') + (show.style.display = 'none');
    }
});
btnTwo.addEventListener('click', function() {

    if(hideTwo.style.display === 'inline-block') {
        (hideTwo.style.display = 'none') + (hide.style.display = 'none') + (hideOne.style.display = 'none') + (hideThree.style.display = 'none') + (show.style.display = 'block');
    } else {
        (hideTwo.style.display = 'inline-block') + (hideOne.style.display = 'none') + (hideThree.style.display = 'none') + (hide.style.display = 'none') + (show.style.display = 'none');
    }
});
btnThree.addEventListener('click', function() {

    if(hideThree.style.display === 'flex') {
        (hideThree.style.display = 'none') + (hide.style.display = 'none') + (hideOne.style.display = 'none') + (hideTwo.style.display = 'none') +  (show.style.display = 'block');
    } else {
        (hideThree.style.display = 'flex') + (hide.style.display = 'none') + (hideOne.style.display = 'none') + (hideTwo.style.display = 'none')  + (show.style.display = 'none');
    }
});

function createGame(time, player1, score, player2) {
    return `
    <li class="time">
        ${time}
    </li>
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}"> 
        <strong>${score}</strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2}">
    </li><hr>   `
}
let delay = -0.3;
function createCard(date, day, games){
    delay = delay + 0.3
    return `
     <div class="card" style="animation-delay: ${delay}">
     <h2> ${date} <span> ${day} </span></h2>
     <ul>
        ${games}
     </ul>
     </div>   `
}



hideOne.innerHTML = createCard("20/11", "Domingo", createGame("Grupo A", "catar", "0 x 2", "equador")) +
createCard("21/11", "Segunda", createGame("Grupo A", "senegal", "0 x 2", "holanda") + createGame("Grupo B", "inglaterra", "6 x 2", "iran") + createGame(" ", "estadosUnidos", "1 x 1", "gales")) +
createCard("22/11", "Ter??a", createGame("Grupo C", "argentina", "1 x 2", "arabiaSaudita") + createGame("", "mexico", "0 x 0", "polonia") + createGame("Grupo D", "dinamarca", "0 x 0", "tunisia") + createGame("", "franca", "4 x 1", "australia")) +
createCard("23/11", "Quarta", createGame("Grupo E", "alemanha", "1 x 2", "japao") + createGame("", "espanha", "7 x 0", "costaRica") + createGame("Grupo F", "marrocos", "0 x 0", "croacia") + createGame("", "belgica", "1 x 0", "canada")) +
createCard("24/11", "Quinta", createGame("Grupo G", "suica", "1 x 0", "camaroes") + createGame("", "brazil", "2 x 0", "servia") + createGame("Grupo H", "uruguai", "0 x 0", "coreiaDoSul") + createGame("", "portugal", "3 x 2", "gana")) +
createCard("25/11", "Sexta", createGame("Grupo A", "catar", "1 x 3", "senegal") + createGame("", "holanda", "1 x 1", "equador") + createGame("Grupo B", "gales", "0 x 2", "iran") + createGame("", "inglaterra", "0 x 0", "estadosUnidos")) +
createCard("26/11", "Sabado", createGame("Grupo C", "polonia", "2 x 0", "arabiaSaudita") + createGame("", "argentina", "2 x 0", "mexico") + createGame("Grupo D", "tunisia", "0 x 1", "australia") + createGame("", "franca", "2 x 1", "dinamarca")) +
createCard("27/11", "Domingo", createGame("Grupo E", "japao", "0 x 1", "costaRica") + createGame("", "espanha", "1 x 1", "alemanha") + createGame("Grupo F", "belgica", "0 x 2", "marrocos") + createGame("", "croacia", "4 x 1", "canada")) +
createCard("28/11", "Segunda", createGame("Grupo G", "camaroes", "3 x 3", "servia") + createGame("", "brazil", "1 x 0", "suica") + createGame("Grupo H", "coreiaDoSul", "2 x 3", "gana") + createGame("", "portugal", "2 x 0", "uruguai")) +
createCard("29/11", "Ter??a", createGame("Grupo A", "equador", "1 x 2", "senegal") + createGame("", "holanda", "2 x 0", "catar") + createGame("Grupo B", "iran", "0 x 1", "estadosUnidos") + createGame("", "gales", "0 x 3", "inglaterra")) +
createCard("30/11", "Quarta", createGame("Grupo C", "polonia", "0 x 2", "argentina") + createGame("", "arabiaSaudita", "1 x 2", "mexico") + createGame("Grupo D", "tunisia", "1 x 0", "franca") + createGame("", "australia", "1 x 0", "dinamarca")) +
createCard("01/12", "Quinta", createGame("Grupo E", "japao", "2 x 1", "espanha") + createGame("", "costaRica", "2 x 4", "alemanha") + createGame("Grupo F", "croacia", "0 x 0", "belgica") + createGame("", "canada", "1 x 2", "marrocos")) +
createCard("02/12", "Sexta", createGame("Grupo G", "camaroes", "1 x 0", "brazil") + createGame("", "servia", "2 x 3", "suica") + createGame("Grupo H", "coreiaDoSul", "2 x 1", "portugal") + createGame("", "gana", "0 x 2", "uruguai")
);

function createPoint(player1, namePlayer, pontos, vitoria, empate, derrota) {
    return `
    <tbody><tr><td><h5 class="classificacao"><img src="./assets/icon-${player1}.svg" alt="brazil"><sup>${namePlayer}</sup></h5></td><td>${pontos}</td><td>3</td><td>${vitoria}</td><td>${empate}</td><td>${derrota}</td></tr></tbody>
    `    
}

let newDelay = -0.3;
function createClassificar(grupo, point){
    newDelay = newDelay + 0.3
    return `
    
     <div class="cardTwo"  style="animation-delay: ${newDelay}">
     <table class="classificarPontos">
        <tr><h2> Grupo ${grupo}</h2></tr>
        <hr>
        <thead><tr><td id="distancia">Equipe</td><td>Pontos</td><td>Jogos</td><td>Vit??ria</td><td>Empate</td><td>Derrota</td></tr></thead>
        ${point}
     </table>
     <blockquote cite="https://www.fifa.com/fifaplus/pt/articles/copa-do-mundo-2022-selecoes-grupos-datas-ingressos" > Apenas os dois primeiros colocados por grupo ?? classificado.</blockquote>
     <hr>
     </div>   `
}

hide.innerHTML = createClassificar("A", createPoint("holanda","Holanda", "7", "2", "1", "0") + createPoint("senegal","Senegal", "6", "2", "0", "1") + createPoint("equador","Equador", "4", "1", "1", "1") + createPoint("catar","Catar", "0", "0", "0", "3")) + 
createClassificar("B", createPoint("inglaterra","Inglaterra", "7", "2", "1", "0") + createPoint("estadosUnidos","Estados Unidos", "5", "1", "2", "0") + createPoint("iran","Ir??", "3", "1", "0", "2") + createPoint("gales","Gales", "1", "0", "1", "2")) + 
createClassificar("C", createPoint("argentina","Argentina", "6", "2", "0", "1") + createPoint("polonia","Pol??nia", "4", "1", "1", "1") + createPoint("mexico", "M??xico", "4", "1", "1", "1") + createPoint("arabiaSaudita","Ar??bia Saudita", "3", "1", "0", "2")) + 
createClassificar("D", createPoint("franca","Fran??a", "6", "2", "0", "1") + createPoint("australia","Austr??lia", "6", "2", "0", "1") + createPoint("tunisia", "Tun??sia", "4", "1", "1", "1") + createPoint("dinamarca","Dinamarca", "1", "0", "1", "2")) + 
createClassificar("E", createPoint("japao","Jap??o", "6", "2", "0", "1") + createPoint("espanha","Espanha", "4", "1", "1", "1") + createPoint("alemanha", "Alemanha", "4", "1", "1", "1") + createPoint("costaRica","Costa Rica", "3", "1", "0", "2")) +
createClassificar("F", createPoint("marrocos","Marrocos", "7", "1", "0", "1") + createPoint("croacia","Cro??cia", "5", "1", "2", "0") + createPoint("belgica", "B??lgica", "4", "1", "1", "1") + createPoint("canada","Canad??", "0", "0", "0", "3")) +
createClassificar("G", createPoint("brazil","Brasil", "6", "2", "0", "1") + createPoint("suica","Sui??a", "6", "2", "0", "1") + createPoint("camaroes", "Camar??es", "4", "1", "1", "1") + createPoint("servia","S??rvia", "1", "0", "1", "2")) +  
createClassificar("H", createPoint("portugal","Portugal", "6", "2", "0", "1") + createPoint("coreiaDoSul","Coreia Do Sul", "4", "1", "1", "1") + createPoint("uruguai", "Uruguai", "4", "1", "1", "1") + createPoint("gana","Gana", "3", "1", "0", "2"));




function createoitavas(player, namePlayer, pontos) {
    return `
    <tbody><tr><td><h5 class="classificacao"><img src="./assets/icon-${player}.svg" alt=${namePlayer}><sup>${namePlayer}</sup></h5></td><td>${pontos}</td></tr></tbody>
    `    
}

let dDelay = -0.3;
function createSeassonLast(faseDeMata, finais){
    dDelay = dDelay + 0.3
    return `
     <div class="last" style="animation-delay: ${newDelay}">
     <h2> ${faseDeMata}</h2>
     <div class="cardi">
      <table>
        <thead><tr><th><p id="cardiUm">p</p></th></tr></thead>
            ${finais}
      </table></div>
    </div>   `
}



document.querySelector("#oitavas").innerHTML = createSeassonLast ("Oitavas de Final", createoitavas("holanda", "Holanda", "3") + createoitavas("estadosUnidos", "Estados Unidos", "1")) +
createSeassonLast ("", createoitavas("argentina", "Argentina", "2") + createoitavas( "australia", "Austr??lia", "1")) +
createSeassonLast ("", createoitavas("japao", "Jap??o", "1 (1)") + createoitavas( "croacia", "Cro??cia", "1 (3)")) + 
createSeassonLast ("", createoitavas("brazil", "Brasil", "4") + createoitavas( "coreiaDoSul", "Coreia Do Sul", "1")) + 
createSeassonLast ("", createoitavas("franca", "Fran??a", "3") + createoitavas( "polonia", "Pol??nia", "1")) +
createSeassonLast ("", createoitavas("inglaterra", "Inglaterra", "3") + createoitavas( "senegal", "Senegal", "0")) + 
createSeassonLast ("", createoitavas("marrocos", "Marrocos", "0 (3)") + createoitavas( "espanha", "Espanha", "0 (0)")) +
createSeassonLast ("", createoitavas("portugal", "Portugal", "6") + createoitavas( "suica", "Sui??a", "1"))

document.querySelector("#quartas").innerHTML = createSeassonLast ("Quartas de Final", createoitavas("holanda", "Holanda", "2 (3)") + createoitavas("argentina", "Argentina", "2 (4)")) +
createSeassonLast ("", createoitavas("croacia", "Cro??cia", "1 (4)") + createoitavas("brazil", "Brasil", "1 (2)")) +
createSeassonLast ("", createoitavas("inglaterra", "Inglaterra", "1") + createoitavas("franca", "Fran??a", "2")) + 
createSeassonLast ("", createoitavas("marrocos", "Marrocos", "1") + createoitavas("portugal", "Portugal", "0"))

document.querySelector("#semi").innerHTML = createSeassonLast ("Semifinais", createoitavas("argentina", "Argentina", "3") + createoitavas("croacia", "Cro??cia", "0")) +
createSeassonLast ("", createoitavas("franca", "Fran??a", "2 ") + createoitavas("marrocos", "Marrocos", "0")) 

document.querySelector("#final").innerHTML = createSeassonLast ("Final", createoitavas("argentina", "Argentina", "3 (4)") + createoitavas("franca", "Fran??a", "3 (2)"));


function creatInformationFinale(champion) {
    return `
    <p>${champion}</p>
    `
}

function creatInformation(title, moreTitle) {
    return `
     <div class="endCard" style="background-image: url(./assets/card-blue.svg)">
     
     <div>
     ${moreTitle}
     
    </div>
    <h1>${title}</h1>
    </div>   `
}



hideThree.innerHTML = creatInformation("Campe??es", creatInformationFinale("Brasil (5)") + creatInformationFinale("Alemanha (4)") + creatInformationFinale("It??lia (4)") + creatInformationFinale("Argentina (3)") + creatInformationFinale("Fran??a (2)") + creatInformationFinale("Uruguai (2)") + creatInformationFinale("Espanha (1)") + creatInformationFinale("Inglaterra (1)")) + 
 creatInformation("A Copa do Mundo de 2022 foi a sexta disputada neste s??culo. ", creatInformationFinale("Campe??es de 2002: Brasil") + creatInformationFinale(" Campe??es de 2006: It??lia ") + creatInformationFinale("Campe??es de 2010: Espanha") + creatInformationFinale("Campe??es de 2014: Alemanha") + creatInformationFinale("Campe??es de 2018: Fran??a") + creatInformationFinale("Campe??es de 2022: Argentina")) +
 creatInformation("Lionel Messi", creatInformationFinale("Messi ?? um jogador argentino que atua como atacante. Atualmente joga pelo Paris Saint-Germain e pela Sele????o Argentina, onde atuando como capit??o venceu a Copa do Mundo do Catar de 2022.")) + 
 creatInformation("Mbapp??", creatInformationFinale("Apesar de perder o t??tulo na final, o atacante foi o artilheiro isolado da edi????o do Qatar e entrou no grupo dos maiores goleadores da hist??ria do torneio. Mbapp?? soma 12 gols em 14 partidas de Copa do Mundo"));










 

