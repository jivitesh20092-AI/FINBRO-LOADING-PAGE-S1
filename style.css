* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow: hidden;
    background: #f5c518;
}

#loadingScreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #f5c518;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

#brandContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

#logoCircle {
    width: 90px;
    height: 90px;
    background: #0a0a0a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

#logoCircle.logo-visible {
    opacity: 1;
    transform: scale(1);
}

#fbLogo {
    color: #f5c518;
    font-family: Georgia, serif;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 1px;
}

#brandName {
    color: #0a0a0a;
    font-family: Georgia, serif;
    font-size: 2.8rem;
    font-weight: bold;
    letter-spacing: 2px;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.8s ease 0.3s;
}

#brandName.logo-visible {
    opacity: 1;
    transform: translateY(0);
}

#brandTagline {
    color: #0a0a0a;
    font-family: Arial, sans-serif;
    font-size: 0.85rem;
    letter-spacing: 5px;
    font-weight: bold;
    margin-top: 6px;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.8s ease 0.5s;
}

#brandTagline.logo-visible {
    opacity: 1;
    transform: translateY(0);
}

#chartContainer {
    position: relative;
    width: 85%;
    max-width: 500px;
    height: 220px;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.8s ease 0.7s;
}

#chartContainer.logo-visible {
    opacity: 1;
    transform: translateY(0);
}

#gridCanvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}

#candles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 10px 8%;
}

.candle-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 10%;
    min-width: 18px;
    position: relative;
    opacity: 0;
    transform: translateY(10px);
}

.candle-wrapper.animate {
    animation: candleFadeIn 0.5s ease forwards;
}

.candle-wick {
    width: 2px;
    background: #3a3a3a;
    position: absolute;
    top: 50%;
    height: 0;
    transform: translateY(-50%);
    transition: height 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.candle-wick.complete {
    height: var(--wick-height);
}

.candle-body {
    width: 100%;
    min-height: 3px;
    max-height: 85%;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(0);
    transform-origin: center;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.candle-body.complete {
    transform: translate(-50%, -50%) scaleY(1);
    height: var(--body-height);
}

.candle-body.green {
    background: #1a9e4b;
    border: 1px solid #15803d;
}

.candle-body.red {
    background: #e03131;
    border: 1px solid #c92a2a;
}

.candle-body.yellow {
    background: #fbbf24;
    border: 1px solid #f59f00;
}

@keyframes candleFadeIn {
    from { 
        opacity: 0; 
        transform: translateY(10px); 
    }
    to { 
        opacity: 1; 
        transform: translateY(0); 
    }
}

#loadingStatus {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    width: 85%;
    max-width: 500px;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.8s ease 1s;
}

#loadingStatus.logo-visible {
    opacity: 1;
    transform: translateY(0);
}

#statusText {
    color: #4a4a4a;
    font-family: Arial, sans-serif;
    font-size: 0.85rem;
    letter-spacing: 1px;
    margin-bottom: 12px;
    transition: opacity 0.3s ease;
}

#loadingBarContainer {
    width: 100%;
    height: 3px;
    background: rgba(10, 10, 10, 0.15);
    border-radius: 3px;
    overflow: hidden;
}

#loadingBar {
    height: 100%;
    width: 0%;
    background: #0a0a0a;
    border-radius: 3px;
    transition: width 0.3s ease;
}

#percentage {
    color: #0a0a0a;
    font-family: Arial, sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 8px;
}
