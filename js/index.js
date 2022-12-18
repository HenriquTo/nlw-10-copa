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

document.querySelector("#cards").innerHTML = 
createCard("20/11", "Domingo", createGame("Grupo A", "catar", "0 x 2", "equador")) +
createCard("21/11", "Segunda", createGame("Grupo A", "senegal", "0 x 2", "holanda") + createGame("Grupo B", "inglaterra", "6 x 2", "iran") + createGame(" ", "estadosUnidos", "1 x 1", "gales")) +
createCard("22/11", "Terça", createGame("Grupo C", "argentina", "1 x 2", "arabiaSaudita") + createGame("", "mexico", "0 x 0", "polonia") + createGame("Grupo D", "dinamarca", "0 x 0", "tunisia") + createGame("", "franca", "4 x 1", "australia")) +
createCard("23/11", "Quarta", createGame("Grupo E", "alemanha", "1 x 2", "japao") + createGame("", "espanha", "7 x 0", "costaRica") + createGame("Grupo F", "marrocos", "0 x 0", "croacia") + createGame("", "belgica", "1 x 0", "canada")) +
createCard("24/11", "Quinta", createGame("Grupo G", "suica", "1 x 0", "camaroes") + createGame("", "brazil", "2 x 0", "servia") + createGame("Grupo H", "uruguai", "0 x 0", "coreiaDoSul") + createGame("", "portugal", "3 x 2", "gana")) +
createCard("25/11", "Sexta", createGame("Grupo A", "catar", "1 x 3", "senegal") + createGame("", "holanda", "1 x 1", "equador") + createGame("Grupo B", "gales", "0 x 2", "iran") + createGame("", "inglaterra", "0 x 0", "estadosUnidos")) +
createCard("26/11", "Sabado", createGame("Grupo C", "polonia", "2 x 0", "arabiaSaudita") + createGame("", "argentina", "2 x 0", "mexico") + createGame("Grupo D", "tunisia", "0 x 1", "australia") + createGame("", "franca", "2 x 1", "dinamarca")) +
createCard("27/11", "Domingo", createGame("Grupo E", "japao", "0 x 1", "costaRica") + createGame("", "espanha", "1 x 1", "alemanha") + createGame("Grupo F", "belgica", "0 x 2", "marrocos") + createGame("", "croacia", "4 x 1", "canada")) +
createCard("28/11", "Segunda", createGame("Grupo G", "camaroes", "3 x 3", "servia") + createGame("", "brazil", "1 x 0", "suica") + createGame("Grupo H", "coreiaDoSul", "2 x 3", "gana") + createGame("", "portugal", "2 x 0", "uruguai")) +
createCard("29/11", "Terça", createGame("Grupo A", "equador", "1 x 2", "senegal") + createGame("", "holanda", "2 x 0", "catar") + createGame("Grupo B", "iran", "0 x 1", "estadosUnidos") + createGame("", "gales", "0 x 3", "inglaterra")) +
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
     <div class="card" style="animation-delay: ${newDelay}">
     
     <table class="classificarPontos">
        <tr><h2> Grupo ${grupo}</h2></tr>
        <thead><tr><td id="distancia">Equipe</td><td>Pontos</td><td>Jogos</td><td>Vitória</td><td>Empate</td><td>Derrota</td></tr></thead>
        ${point}
        
     </table>
        <hr>
     </div>   `
}

document.querySelector("#classificar").innerHTML = createClassificar("A", createPoint("holanda","Holanda", "7", "2", "1", "0") + createPoint("senegal","Senegal", "6", "2", "0", "1") + createPoint("equador","Equador", "4", "1", "1", "1") + createPoint("catar","Catar", "0", "0", "0", "3")) + 
createClassificar("B", createPoint("inglaterra","Inglaterra", "7", "2", "1", "0") + createPoint("estadosUnidos","Estados Unidos", "5", "1", "2", "0") + createPoint("iran","Irã", "3", "1", "0", "2") + createPoint("gales","Gales", "1", "0", "1", "2")) + 
createClassificar("C", createPoint("argentina","Argentina", "6", "2", "0", "1") + createPoint("polonia","Polônia", "4", "1", "1", "1") + createPoint("mexico", "México", "4", "1", "1", "1") + createPoint("arabiaSaudita","Arábia Saudita", "3", "1", "0", "2")) + 
createClassificar("D", createPoint("franca","França", "6", "2", "0", "1") + createPoint("australia","Austrália", "6", "2", "0", "1") + createPoint("tunisia", "Tunísia", "4", "1", "1", "1") + createPoint("dinamarca","Dinamarca", "1", "0", "1", "2")) + 
createClassificar("E", createPoint("japao","Japão", "6", "2", "0", "1") + createPoint("espanha","Espanha", "4", "1", "1", "1") + createPoint("alemanha", "Alemanha", "4", "1", "1", "1") + createPoint("costaRica","Costa Rica", "3", "1", "0", "2")) +
createClassificar("F", createPoint("marrocos","Marrocos", "7", "1", "0", "1") + createPoint("croacia","Croácia", "5", "1", "2", "0") + createPoint("belgica", "Bélgica", "4", "1", "1", "1") + createPoint("canada","Canadá", "0", "0", "0", "3")) +
createClassificar("G", createPoint("brazil","Brasil", "6", "2", "0", "1") + createPoint("suica","Suiça", "6", "2", "0", "1") + createPoint("camaroes", "Camarões", "4", "1", "1", "1") + createPoint("servia","Sérvia", "1", "0", "1", "2")) +  
createClassificar("H", createPoint("portugal","Portugal", "6", "2", "0", "1") + createPoint("coreiaDoSul","Coreia Do Sul", "4", "1", "1", "1") + createPoint("uruguai", "Uruguai", "4", "1", "1", "1") + createPoint("gana","Gana", "3", "1", "0", "2"))


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
createSeassonLast ("", createoitavas("argentina", "Argentina", "2") + createoitavas( "australia", "Austrália", "1")) +
createSeassonLast ("", createoitavas("japao", "Japão", "1 (1)") + createoitavas( "croacia", "Croácia", "1 (3)")) + 
createSeassonLast ("", createoitavas("brazil", "Brasil", "4") + createoitavas( "coreiaDoSul", "Coreia Do Sul", "1")) + 
createSeassonLast ("", createoitavas("franca", "França", "3") + createoitavas( "polonia", "Polônia", "1")) +
createSeassonLast ("", createoitavas("inglaterra", "Inglaterra", "3") + createoitavas( "senegal", "Senegal", "0")) + 
createSeassonLast ("", createoitavas("marrocos", "Marrocos", "0 (3)") + createoitavas( "espanha", "Espanha", "0 (0)")) +
createSeassonLast ("", createoitavas("portugal", "Portugal", "6") + createoitavas( "suica", "Suiça", "1"))


document.querySelector("#quartas").innerHTML = createSeassonLast ("Quartas de Final", createoitavas("holanda", "Holanda", "2 (3)") + createoitavas("argentina", "Argentina", "2 (4)")) +
createSeassonLast ("", createoitavas("croacia", "Croácia", "1 (4)") + createoitavas("brazil", "Brasil", "1 (2)")) +
createSeassonLast ("", createoitavas("inglaterra", "Inglaterra", "1") + createoitavas("franca", "França", "2")) + 
createSeassonLast ("", createoitavas("marrocos", "Marrocos", "1") + createoitavas("portugal", "Portugal", "0"))


document.querySelector("#semi").innerHTML = createSeassonLast ("Semifinais", createoitavas("argentina", "Argentina", "3") + createoitavas("croacia", "Croácia", "0")) +
createSeassonLast ("", createoitavas("franca", "França", "2 ") + createoitavas("marrocos", "Marrocos", "0")) 

document.querySelector("#final").innerHTML = createSeassonLast ("Final", createoitavas("argentina", "Argentina", "3 (4)") + createoitavas("franca", "França", "3 (2)"))

document.querySelector("#terceiro").innerHTML = createSeassonLast ("Terceiro lugar", createoitavas("croacia", "Croácia", "2") + createoitavas("marrocos", "Marrocos", "1")) 





