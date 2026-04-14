const SUITS = [
  { name: 'hearts', symbol: '♥', color: 'red' },
  { name: 'diamonds', symbol: '♦', color: 'red' },
  { name: 'clubs', symbol: '♣', color: 'black' },
  { name: 'spades', symbol: '♠', color: 'black' }
];

const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

class Card {
  constructor(suit, rank, faceUp = false) {
    this.suit = suit;
    this.rank = rank;
    this.rankValue = RANKS.indexOf(rank) + 1;
    this.faceUp = faceUp;
  }
}

let state = {
  stock: [],
  waste: [],
  foundation: [[], [], [], []],
  tableau: [[], [], [], [], [], [], []],
  selected: null, // { pileType, pileIndex, cardIndex }
};

function initGame() {
  const deck = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push(new Card(suit, rank));
    }
  }

  // Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  state.stock = deck;
  state.waste = [];
  state.foundation = [[], [], [], []];
  state.tableau = [[], [], [], [], [], [], []];
  state.selected = null;

  // Deal
  for (let i = 0; i < 7; i++) {
    for (let j = i; j < 7; j++) {
      const card = state.stock.pop();
      if (j === i) card.faceUp = true;
      state.tableau[j].push(card);
    }
  }

  render();
}

function createCardElement(card, pileType, pileIndex, cardIndex) {
  const el = document.createElement('div');
  el.className = `card ${card.faceUp ? '' : 'back'} ${card.suit ? card.suit.color : ''}`;
  
  if (card.faceUp) {
    el.innerHTML = `
      <div class="top">${card.rank}${card.suit.symbol}</div>
      <div class="center">${card.suit.symbol}</div>
      <div class="bottom">${card.rank}${card.suit.symbol}</div>
    `;
  }

  if (state.selected && 
      state.selected.pileType === pileType && 
      state.selected.pileIndex === pileIndex && 
      state.selected.cardIndex === cardIndex) {
    el.classList.add('selected');
  }

  el.addEventListener('click', (e) => {
    e.stopPropagation();
    handleCardClick(pileType, pileIndex, cardIndex);
  });

  return el;
}

function render() {
  // Render Stock
  const stockEl = document.getElementById('stock-pile');
  stockEl.innerHTML = '';
  stockEl.onclick = null;
  if (state.stock.length > 0) {
    const card = new Card(null, null, false);
    const el = createCardElement(card, 'stock', 0, 0);
    stockEl.appendChild(el);
  } else {
    stockEl.innerHTML = '↺';
    stockEl.style.display = 'flex';
    stockEl.style.justifyContent = 'center';
    stockEl.style.alignItems = 'center';
    stockEl.style.fontSize = '3rem';
    stockEl.style.color = 'rgba(255,255,255,0.2)';
    stockEl.onclick = refillStock;
  }

  // Render Waste
  const wasteEl = document.getElementById('waste-pile');
  wasteEl.innerHTML = '';
  if (state.waste.length > 0) {
    const card = state.waste[state.waste.length - 1];
    wasteEl.appendChild(createCardElement(card, 'waste', 0, state.waste.length - 1));
  }

  // Render Foundations
  for (let i = 0; i < 4; i++) {
    const foundEl = document.getElementById(`foundation-${i}`);
    foundEl.innerHTML = '';
    foundEl.onclick = () => handlePileClick('foundation', i);
    if (state.foundation[i].length > 0) {
      const card = state.foundation[i][state.foundation[i].length - 1];
      foundEl.appendChild(createCardElement(card, 'foundation', i, state.foundation[i].length - 1));
    } else {
      foundEl.innerHTML = `<span style="font-size: 2rem; opacity: 0.2; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">${SUITS[i].symbol}</span>`;
    }
  }

  // Render Tableau
  for (let i = 0; i < 7; i++) {
    const tabEl = document.getElementById(`tableau-${i}`);
    tabEl.innerHTML = '';
    tabEl.onclick = () => handlePileClick('tableau', i);
    
    state.tableau[i].forEach((card, cardIdx) => {
      const cardEl = createCardElement(card, 'tableau', i, cardIdx);
      cardEl.style.top = `${cardIdx * 25}px`;
      tabEl.appendChild(cardEl);
    });
  }

  checkWin();
}

function refillStock() {
  if (state.stock.length === 0 && state.waste.length > 0) {
    state.stock = state.waste.reverse().map(c => {
      c.faceUp = false;
      return c;
    });
    state.waste = [];
    render();
  }
}

function handleCardClick(pileType, pileIndex, cardIndex) {
  if (pileType === 'stock') {
    const card = state.stock.pop();
    card.faceUp = true;
    state.waste.push(card);
    state.selected = null;
    render();
    return;
  }

  if (state.selected) {
    if (state.selected.pileType === pileType && state.selected.pileIndex === pileIndex && state.selected.cardIndex === cardIndex) {
      state.selected = null;
    } else {
      tryMove(state.selected, { pileType, pileIndex });
    }
  } else {
    const card = getCardAt(pileType, pileIndex, cardIndex);
    if (card && card.faceUp) {
      state.selected = { pileType, pileIndex, cardIndex };
    }
  }
  render();
}

function handlePileClick(pileType, pileIndex) {
  if (state.selected) {
    tryMove(state.selected, { pileType, pileIndex });
    render();
  }
}

function getCardAt(type, pIdx, cIdx) {
  if (type === 'waste') return state.waste[state.waste.length - 1];
  if (type === 'foundation') return state.foundation[pIdx][state.foundation[pIdx].length - 1];
  if (type === 'tableau') return state.tableau[pIdx][cIdx];
  return null;
}

function tryMove(from, to) {
  const fromPile = getPile(from.pileType, from.pileIndex);
  const toPile = getPile(to.pileType, to.pileIndex);
  const cardsToMove = fromPile.slice(from.cardIndex);
  const firstCard = cardsToMove[0];

  let valid = false;

  if (to.pileType === 'foundation') {
    if (cardsToMove.length === 1) {
      const targetPile = state.foundation[to.pileIndex];
      const targetSuit = SUITS[to.pileIndex];
      if (targetPile.length === 0) {
        if (firstCard.rank === 'A' && firstCard.suit.name === targetSuit.name) valid = true;
      } else {
        const topCard = targetPile[targetPile.length - 1];
        if (topCard.suit.name === firstCard.suit.name && topCard.rankValue + 1 === firstCard.rankValue) {
          valid = true;
        }
      }
    }
  } else if (to.pileType === 'tableau') {
    const targetPile = state.tableau[to.pileIndex];
    if (targetPile.length === 0) {
      if (firstCard.rank === 'K') valid = true;
    } else {
      const topCard = targetPile[targetPile.length - 1];
      if (topCard.suit.color !== firstCard.suit.color && topCard.rankValue - 1 === firstCard.rankValue) {
        valid = true;
      }
    }
  }

  if (valid) {
    // Perform move
    const removed = fromPile.splice(from.cardIndex);
    toPile.push(...removed);
    
    // Flip top card of fromTableau
    if (from.pileType === 'tableau' && fromPile.length > 0) {
      fromPile[fromPile.length - 1].faceUp = true;
    }
    state.selected = null;
  } else {
    state.selected = null;
  }
}

function getPile(type, index) {
  if (type === 'waste') return state.waste;
  if (type === 'foundation') return state.foundation[index];
  if (type === 'tableau') return state.tableau[index];
  return null;
}

function checkWin() {
  const win = state.foundation.every(f => f.length === 13);
  if (win) {
    document.getElementById('status').innerText = 'CONGRATULATIONS! YOU WON!';
  }
}

document.getElementById('new-game').addEventListener('click', initGame);

// Initial game start
initGame();
