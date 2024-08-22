function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '/') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    const history = document.getElementById('history');
    
    try {
        const result = eval(display.innerText) || '0';
        const operation = display.innerText + ' = ' + result;
        
     
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerText = operation;
        history.appendChild(historyItem);
        
       
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

function clearHistory() {
    const history = document.getElementById('history');
    history.innerHTML = ''; 
}
