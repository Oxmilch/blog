Klondike Game Implementation Plan
Create a basic Klondike solitaire game in games/klondike/ using HTML, CSS, and JS. The game will use text characters for cards and a minimalist, premium design.

Proposed Changes
Klondike Game Component
Create a new folder games/klondike/ with the following files:

[NEW] 
index.html
Main HTML structure
Game board layout (stock, waste, foundations, tableau)
Links to CSS and JS
[NEW] 
style.css
Premium dark mode aesthetic
Layout using Grid/Flexbox
Card styles (border, suit colors, font)
Animations for card movements
[NEW] 
script.js
Game logic:
Deck generation and shuffling
Initial dealing
Card movement rules (tableau building, foundations, stock/waste)
Interaction handling (click-to-select and move)
State management
Victory condition check
Verification Plan
Manual Verification
Open index.html in the browser using the browser tool.
Test basic moves:
Move card to foundation
Move card to tableau (alternate color, descending rank)
Draw from stockpile
Move sequence of cards in tableau
Verify victory condition (if possible to reach quickly or by debugging state).