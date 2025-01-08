# PathViz - Interactive Pathfinding Algorithm Visualizer

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg)](https://tailwindcss.com/)

PathViz is an interactive web application built with React and TypeScript that visualizes various pathfinding algorithms in real-time. This educational tool helps users understand how different pathfinding algorithms work through dynamic visualization and interaction.

![Pathfinding Visualization](public/pathviz.gif)


## 🚀 Features

### Pathfinding Algorithms
- **Dijkstra's Algorithm**: Guarantees the shortest path
- **A* Search**: Efficient pathfinding using heuristics
- **Breadth-First Search (BFS)**: Explores nodes level by level
- **Depth-First Search (DFS)**: Explores as far as possible along branches

### Maze Generation
- **Binary Tree Maze**: Creates perfect mazes with a binary tree approach
- **Recursive Division**: Generates complex mazes through recursive partitioning

### Interactive Features
- 🖱️ Click and drag to create/remove walls
- ⚡ Adjustable visualization speed
- 🔄 Clear path and reset functionality
- 📱 Responsive design for all screen sizes

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: React Icons
- **Development**: ESLint, Prettier

## 💻 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Bipin-Kalakheti/pathviz.git
cd pathviz
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Project Structure

```
pathviz/
├── public/                # Static assets
├── src/
│   ├── assets/           # Project assets
│   ├── components/       # React components
│   │   ├── Grid/
│   │   ├── Nav/
│   │   ├── PlayButton/
│   │   ├── Select/
│   │   └── Tile/
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/
│   │   └── algorithms/  # Algorithm implementations
│   └── utils/           # Helper functions
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Production Build

To create a production build:

```bash
npm run build
```

The build will be available in the `dist` directory.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - UI icons
- [Vite](https://vitejs.dev/) - Build tool

## 📧 Contact


Live Link: [https://pathviz-phi.vercel.app/](https://pathviz-phi.vercel.app/)

---

Made with ❤️ by Bipin Kalakheti