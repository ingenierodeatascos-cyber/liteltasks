# ARCHITECTURE

## objectiu de l’arquitectura

Definir una arquitectura mínima, clara i educativa per construir el MVP de LiteTasks com una aplicació SaaS simple de control de tasques.

Aquesta arquitectura ha de complir quatre objectius:

- ser fàcil d’entendre per a un estudiant
- permetre construir un MVP real sense complexitat innecessària
- facilitar el treball assistit amb IA amb context clar i controlat
- deixar una base preparada per créixer en el futur

LiteTasks és el producte principal.  
El sistema d’agents, prompts i documents és el mètode de treball per construir-lo de forma ordenada.

---

## stack tecnològic

### frontend
Aplicació web amb interfície simple per a l’usuari.

Tecnologies previstes:
- Next.js
- React
- TypeScript

### backend
Lògica de servidor integrada dins la mateixa aplicació.

Tecnologies previstes:
- Next.js Route Handlers o Server Actions
- TypeScript

### database
Persistència relacional simple per al MVP.

Tecnologies previstes:
- Prisma ORM
- SQLite en desenvolupament local

### authentication
Sistema d’autenticació per protegir l’accés a les dades de cada usuari.

Opcions compatibles:
- Auth.js / NextAuth
- o implementació equivalent simple segons el stack final

### testing
Validació mínima del comportament principal del sistema.

Estratègia prevista:
- testing manual del flux principal
- tests bàsics de validació i lògica crítica

---

## principis d’arquitectura

- començar simple
- evitar abstraccions prematures
- separar producte i sistema de treball
- dividir el desenvolupament en increments petits
- documentar decisions importants
- prioritzar claredat sobre sofisticació
- fer que la IA treballi amb context mínim però suficient

---

## components principals del sistema

### 1. web app
És l’aplicació principal que utilitza l’usuari final.

Responsabilitats:
- mostrar les pantalles de registre, login i dashboard
- recollir les accions de l’usuari
- mostrar llistat de tasques
- mostrar errors i estats bàsics

No fa:
- no decideix regles de negoci complexes
- no accedeix directament a dades sense passar per la lògica de servidor

### 2. auth module
Gestiona la identificació de l’usuari.

Responsabilitats:
- registre
- login
- logout
- protecció de rutes privades
- associació entre usuari autenticat i dades pròpies

No fa:
- no gestiona dades de tasques directament
- no substitueix la validació de permisos de negoci

### 3. tasks module
És la feature principal del MVP.

Responsabilitats:
- crear tasques
- llistar tasques de l’usuari
- canviar estat pendent/completada
- eliminar tasques

No fa:
- no gestiona altres dominis
- no implementa encara etiquetes, prioritats o col·laboració

### 4. database layer
Capa de persistència del sistema.

Responsabilitats:
- guardar usuaris
- guardar tasques
- mantenir relació User → Task
- assegurar coherència bàsica de dades

No fa:
- no conté lògica d’interfície
- no decideix el flux d’usuari

### 5. workflow documental AI-first
Sistema intern de treball del projecte.

Responsabilitats:
- mantenir documentació viva
- definir especificació
- desglossar tasques
- registrar decisions
- coordinar el treball assistit amb IA

Components inclosos:
- Orchestrator
- Agents
- Prompts
- State Documents

No és el producte final:
- serveix per construir millor LiteTasks
- no substitueix l’aplicació SaaS

---

## estructura del repositori

```text
liteltasks/
├── app/
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   ├── api/
│   └── layout.tsx
├── src/
│   ├── features/
│   │   ├── auth/
│   │   └── tasks/
│   ├── lib/
│   ├── db/
│   └── validations/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
├── docs/
│   ├── 00_PROJECT_STATE.md
│   ├── 01_SPEC.md
│   ├── 02_ARCHITECTURE.md
│   ├── 03_TASKS.md
│   ├── 04_DECISIONS.md
│   ├── 05_TESTING.md
│   ├── 06_CURRENT_SPRINT.md
│   └── 07_CONTEXT_RULES.md
├── agents/
├── prompts/
├── contracts/
├── skills/
├── AGENTS.md
├── ORCHESTRATOR.md
└── README.md