let players = [];
let availablePlayers = [];

function addPlayer() {
    const input = document.getElementById('playerName');
    const name = input.value.trim();
    
    if (name && !players.includes(name)) {
        players.push(name);
        updatePlayersList();
        input.value = '';
        updateDrawButton();
    }
}

function updatePlayersList() {
    const list = document.getElementById('playersList');
    list.innerHTML = players.map(player => `<li>${player}</li>`).join('');
}

function updateDrawButton() {
    const button = document.getElementById('drawButton');
    button.disabled = players.length < 2;
}

function drawPlayers() {
    if (availablePlayers.length < 2) {
        availablePlayers = [...players];
    }
    
    const asker = availablePlayers.splice(Math.floor(Math.random() * availablePlayers.length), 1)[0];
    const responder = availablePlayers.splice(Math.floor(Math.random() * availablePlayers.length), 1)[0];
    
    const askerBox = document.getElementById('asker');
    const responderBox = document.getElementById('responder');
    
    askerBox.textContent = asker;
    responderBox.textContent = responder;
    
    askerBox.classList.add('show');
    responderBox.classList.add('show');
}

document.getElementById('playerName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addPlayer();
    }
});