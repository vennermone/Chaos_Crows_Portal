
let chaosLevel = 1000;
const MAX_CHAOS = 5000;
const SECRET_CODE = "CrowsRule42!";

function summonWarBands() {
    chaosLevel *= 1.5;
    document.getElementById('chaosCounter').textContent = `${chaosLevel}%`;
    
    // Create war band unit
    const warBand = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    warBand.setAttribute("class", "war-band-unit");
    warBand.setAttribute("viewBox", "0 0 100 100");
    warBand.style.left = `${Math.random() * 90}%`;
    warBand.style.top = `${Math.random() * 90}%`;
    
    // SVG paths for chaotic warrior
    warBand.innerHTML = `
      <filter id="chaosFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3"/>
        <feDisplacementMap in="SourceGraphic" scale="8"/>
      </filter>
      <path d="M20 50 Q40 10 60 50 Q40 90 20 50" 
            fill="#ff00ff" 
            filter="url(#chaosFilter)"/>
      <rect x="45" y="40" width="10" height="30" fill="#39FF14"/>
      <path d="M30 60 L50 80 L70 60" fill="none" stroke="#39FF14" stroke-width="3"/>
    `;
  
    document.body.appendChild(warBand);
    
    // Auto-remove after animation
    setTimeout(() => warBand.remove(), 4000);
    
    // Sound effect
    new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU').play();
  }

function calculateTax() {
    const screams = document.getElementById('screamsInput').value || 42;
    const tax = (screams * 3.14 * (chaosLevel/1000)).toFixed(2);
    document.getElementById('debtOutput').innerHTML = 
        `${tax} <small>(+ ${chaosLevel/10}% CHAOS TAX)</small>`;
}

function toggleSinkhole() {
    const disco = document.getElementById('sinkholeDisco');
    disco.classList.toggle('disco-active');
    document.querySelector('marquee').style.fontFamily = 
        disco.classList.contains('disco-active') ? 'Rubik Glitch' : 'Arial';
}

function unlockSecret() {
    const pass = prompt("ENTER CROW LAW PASSPHRASE:");
    if(pass === SECRET_CODE) {
        const manifesto = document.querySelector('.void-manifesto');
        manifesto.innerHTML += `
            <div class="secret-reveal">
                <h3>🔓 TOP SECRET:</h3>
                <p>The crows control all tax agencies. Brazil is their puppet state.</p>
            </div>
        `;
    } else {
        alert("ACCESS DENIED. FEATHER AUDIT INITIATED.");
    }
}

// Initialize chaos meter
document.querySelector('.chaos-meter progress').value = chaosLevel;
