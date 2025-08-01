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
    // Reset available players if less than 2 remain
    if (availablePlayers.length < 2) {
        availablePlayers = [...players];
    }
    
    // Get random asker
    const askerIndex = Math.floor(Math.random() * availablePlayers.length);
    const asker = availablePlayers.splice(askerIndex, 1)[0];
    
    // Get random responder from remaining players
    const responderIndex = Math.floor(Math.random() * availablePlayers.length);
    const responder = availablePlayers.splice(responderIndex, 1)[0];
    
    // Update display
    const askerBox = document.getElementById('asker');
    const responderBox = document.getElementById('responder');
    
    // Clear previous classes
    askerBox.classList.remove('show');
    responderBox.classList.remove('show');
    
    // Set new content
    askerBox.textContent = asker;
    responderBox.textContent = responder;
    
    // Add show class with slight delay for animation
    setTimeout(() => {
        askerBox.classList.add('show');
        responderBox.classList.add('show');
    }, 50);
}

document.getElementById('playerName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addPlayer();
    }
});