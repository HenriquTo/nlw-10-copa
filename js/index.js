function createGame(time, player1, hour, player2) {
    return `
    <li class="time">
        ${time}
    </li>
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}"> 
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2}">
    </li><hr>
 
    `
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
     </div>
    `
}

document.querySelector("#cards").innerHTML = 
createCard("20/11", "Domingo", createGame("Grupo A", "catar", "0 x 2", "equador")) +
createCard("21/11", "Segunda", createGame("Grupo A", "senegal", "0 x 2", "holanda") + createGame("Grupo B", "inglaterra", "6 x 2", "iran") + createGame(" ", "estadosUnidos", "1 x 1", "gales")) +
createCard("22/11", "Terça", createGame("Grupo C", "argentina", "1 x 2", "arabiaSaudita") + createGame("", "mexico", "0 x 0", "polonia") + createGame("Grupo D", "dinamarca", "0 x 0", "tunisia") + createGame("", "franca", "4 x 1", "australia")) +
createCard("23/11", "Quarta", createGame("Grupo E", "alemanha", "1 x 2", "japao") + createGame("", "espanha", "7 x 0", "costaRica") + createGame("Grupo F", "marrocos", "0 x 0", "croacia") + createGame("", "belgica", "1 x 0", "canada")) +
createCard("24/11", "Quinta", createGame("Grupo G", "suica", "1 x 0", "camaroes") + createGame("", "brazil", "2 x 0", "servia") + createGame("Grupo H", "uruguai", "0 x 0", "coreiaDoSul") + createGame("", "portugal", "3 x 2", "gana")
) +
createCard("25/11", "Sexta", createGame("Grupo A", "catar", "1 x 3", "senegal") + createGame("", "holanda", "1 x 1", "equador") + createGame("Grupo B", "gales", "0 x 2", "iran") + createGame("", "inglaterra", "0 x 0", "estadosUnidos")) +
createCard("26/11", "Sabado", createGame("Grupo C", "polonia", "2 x 0", "arabiaSaudita") + createGame("", "argentina", "2 x 0", "mexico") + createGame("Grupo D", "tunisia", "0 x 1", "australia") + createGame("", "franca", "2 x 1", "dinamarca")) +
createCard("27/11", "Domingo", createGame("Grupo E", "japao", "0 x 1", "costaRica") + createGame("", "espanha", "1 x 1", "alemanha") + createGame("Grupo F", "belgica", "0 x 2", "marrocos") + createGame("", "croacia", "4 x 1", "canada")) +
createCard("28/11", "Segunda", createGame("Grupo G", "camaroes", "3 x 3", "servia") + createGame("", "brazil", "1 x 0", "suica") + createGame("Grupo H", "coreiaDoSul", "2 x 3", "gana") + createGame("", "portugal", "2 x 0", "uruguai")) +
createCard("29/11", "Terça", createGame("Grupo A", "equador", "1 x 2", "senegal") + createGame("", "holanda", "2 x 0", "catar") + createGame("Grupo B", "iran", "0 x 1", "estadosUnidos") + createGame("", "gales", "0 x 3", "inglaterra")) +
createCard("30/11", "Quarta", createGame("Grupo C", "polonia", "0 x 2", "argentina") + createGame("", "arabiaSaudita", "1 x 2", "mexico") + createGame("Grupo D", "tunisia", "1 x 0", "franca") + createGame("", "australia", "1 x 0", "dinamarca")) +

createCard("01/12", "Quinta", createGame("Grupo E", "japao", "2 x 1", "espanha") + createGame("", "costaRica", "2 x 4", "alemanha") + createGame("Grupo F", "croacia", "0 x 0", "belgica") + createGame("", "canada", "1 x 2", "marrocos"))
+
createCard("02/12", "Sexta", createGame("Grupo G", "camaroes", "1 x 0", "brazil") + createGame("", "servia", "2 x 3", "suica") + createGame("Grupo H", "coreiaDoSul", "2 x 1", "portugal") + createGame("", "gana", "0 x 2", "uruguai")
)
