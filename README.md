# Includo | Social Integration Management System

**Includo** is a project created for the Start2Impact Master in Fullstack Development; it features a TypeScript-based system model designed to simulate the operational workflow of a professional training center.

The project leverages **Object-Oriented Programming (OOP)** to model the integration of migrants into the labor market through training programs and corporate partnerships.

## Technical Highlights
- **Interface-Driven Design**: Uses strict interfaces (`IPartecipante`, `ICorso`, `IAzienda`) to define system contracts before implementation.
- **Encapsulation**: Implements native JavaScript **private fields (#)** to protect internal state, ensuring data can only be modified through controlled methods.
- **Type Safety**: Utilizes TypeScript's strict typing to manage interactions, such as student enrollment and job offer validation.

## OOP Principles Applied
- **Abstraction through Interfaces**: Decouples data structure from implementation details.
- **Accessors (Getters/Setters)**: Uses clean getters and setters for controlled access to private properties.
- **Modular Architecture**: Separate modules for interfaces and classes to maintain high code readability and scalability.

## System Entities
1. **Partecipante**: Models applicant profiles, education levels, and linguistic competencies.
2. **Corso**: Manages training programs, durations, and dynamic enrollment lists.
3. **Azienda**: Represents partner companies, managing open positions and job offer logic.

## Live Demo
You can view the logic implementation on [CodePen](https://codepen.io/Gregorio-Viola/pen/NPRbGpM).

## Folder structure
```
includo/
├── dist/                   # Compiled JavaScript files (generated via npx tsc)
├── node_modules/           # Project dependencies
├── src/                    # Source files (rootDir)
│   ├── moduli/             # System components
│   │   ├── classi.ts       # Implementation of system logic and entities
│   │   └── interfacce.ts   # Definition of strict data contracts
│   └── index.ts            # Entry point and simulation script
├── package.json            # Project metadata and dependency manifest
├── package-lock.json       # Version locking for dependencies
└── tsconfig.json           # TypeScript compiler configuration
```

## Getting Started

To compile the project and see the system in action, follow these steps:

### Install dependencies:
    npm install

### Compile TypeScript:
    npx tsc #This will generate the dist/ folder based on tsconfig.json settings

### Run the simulation:
    node dist/index.js
