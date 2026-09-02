// Phase 1: Show logo and grid
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('logoContainer').classList.add('logo-visible');
        document.getElementById('gridCanvas').classList.add('grid-visible');
        createGrid();
    }, 500);
    
    // Phase 2: Animate candles
    setTimeout(() => {
        createCandles();
    }, 1500);
    
    // Phase 3: White overlay
    setTimeout(() => {
        document.getElementById('whiteOverlay').classList.add('active');
    }, 5500);
    
    // Phase 4: Navigate to /s1
    setTimeout(() => {
        window.location.href = 's1/index.html';
    }, 6000);
});

function createGrid() {
    const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    for (let x = 0; x <= width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    
    for (let y = 0; y <= height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

function createCandles() {
    const container = document.getElementById('candles');
    container.innerHTML = '';
    
    const candleData = [
        { type: 'green', body: 80, wick: 120 },
        { type: 'red', body: 60, wick: 100 },
        { type: 'green', body: 100, wick: 140 },
        { type: 'red', body: 50, wick: 90 },
        { type: 'green', body: 70, wick: 110 },
        { type: 'red', body: 90, wick: 130 },
        { type: 'green', body: 65, wick: 105 }
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
        }, index * 200);
        
        setTimeout(() => {
            body.classList.add('complete');
            wick.classList.add('complete');
        }, index * 200 + 400);
        
        if (index === 4) {
            setTimeout(() => {
                wrapper.classList.add('highlight');
            }, 5000);
        }
    });
}
