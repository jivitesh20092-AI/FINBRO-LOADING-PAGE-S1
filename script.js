document.addEventListener('DOMContentLoaded', () => {
    const logoElements = ['logoCircle', 'brandName', 'chartContainer', 'loadingStatus'];
    
    setTimeout(() => {
        logoElements.forEach(id => {
            document.getElementById(id).classList.add('logo-visible');
        });
    }, 300);
    
    startCandles();
    
    // Loading bar and status text animation
    let progress = 0;
    const statusMessages = [
        'Analyzing market data…',
        'Reading market signals…',
        'Processing price action…',
        'Evaluating market trends…',
        'Finbro is working…'
    ];
    
    const statusText = document.getElementById('statusText');
    const loadingBar = document.getElementById('loadingBar');
    const percentage = document.getElementById('percentage');
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 3) + 1;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            statusText.textContent = 'Analysis complete';
            
            setTimeout(() => {
                statusText.textContent = 'Finbro ready…';
            }, 2000);
        }
        
        loadingBar.style.width = progress + '%';
        percentage.textContent = progress + '%';
        
        if (progress >= 20 && progress < 40) {
            statusText.textContent = statusMessages[1];
        } else if (progress >= 40 && progress < 60) {
            statusText.textContent = statusMessages[2];
        } else if (progress >= 60 && progress < 80) {
            statusText.textContent = statusMessages[3];
        } else if (progress >= 80 && progress < 100) {
            statusText.textContent = statusMessages[4];
        }
    }, 300);
});

function startCandles() {
    const container = document.getElementById('candles');
    container.innerHTML = '';
    
    const candleData = [
        { type: 'green', body: 60, wick: 100 },
        { type: 'red', body: 50, wick: 90 },
        { type: 'green', body: 75, wick: 110 },
        { type: 'red', body: 45, wick: 80 },
        { type: 'green', body: 80, wick: 120 },
        { type: 'red', body: 55, wick: 85 },
        { type: 'green', body: 70, wick: 105 },
        { type: 'red', body: 60, wick: 90 },
        { type: 'green', body: 85, wick: 125 },
        { type: 'red', body: 65, wick: 95 },
        { type: 'green', body: 55, wick: 85 },
        { type: 'red', body: 70, wick: 100 }
    ];
    
    candleData.forEach((candle, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'candle-wrapper';
        
        const body = document.createElement('div');
        body.className = `candle-body ${candle.type}`;
        body.style.setProperty('--body-height', candle.body + 'px');
        
        const wick = document.createElement('div');
        wick.className = 'candle-wick';
        wick.style.setProperty('--wick-height', candle.wick + 'px');
        
        wrapper.appendChild(body);
        wrapper.appendChild(wick);
        container.appendChild(wrapper);
        
        setTimeout(() => {
            wrapper.classList.add('animate');
        }, 1000 + index * 150);
        
        setTimeout(() => {
            body.classList.add('complete');
            wick.classList.add('complete');
        }, 1000 + index * 150 + 300);
    });
}
