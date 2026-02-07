# 🎲 Tenzies Game

A fun and interactive dice game built with React! Roll the dice until all ten show the same number. Click individual dice to "freeze" them between rolls.

## How to Play

1. **Start Rolling**: Click the "Roll" button to roll all dice
2. **Hold Dice**: Click on any die to "hold" it (freeze its current value)
3. **Strategy**: Hold dice that show the same number
4. **Win Condition**: When all ten dice show the same number AND are all held, you win!
5. **New Game**: After winning, click "New Game" to start over

## Features

- 🎉 **Confetti Celebration**: Visual celebration when you win
- **Accessibility**: Screen reader support and ARIA labels
- **Focus Management**: Auto-focus on the game button after winning
- **Visual Feedback**: Held dice are visually distinct
- 🎲 **Randomized Dice**: Each game starts with random dice values

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install react-confetti nanoid
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to play!

## 📁 Project Structure

```
src/
├── App.js          # Main game logic and components
├── components/
│   └── Die.js     # Individual die component
├── styles/         # CSS styles (if any)
└── ...
```

## Technologies Used

- **React** - Frontend framework
- **react-confetti** - Victory celebration effects
- **nanoid** - Unique ID generation for dice
- **CSS** - Styling

## Accessibility Features

- Screen reader announcements for game status
- ARIA labels on dice buttons
- Keyboard navigable interface
- Semantic HTML structure

## 🎮 Game Rules

- Roll all 10 dice at once
- After each roll, select dice with the same number
- Hold selected dice by clicking on them
- Continue rolling until all dice show the same number
- All dice must be held to win