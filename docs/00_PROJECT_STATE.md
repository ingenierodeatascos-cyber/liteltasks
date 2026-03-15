# PROJECT STATE

## nom del projecte

LiteTasks

---

## objectiu del projecte

Construir un MVP d’una aplicació SaaS simple de control de tasques personals.

L’objectiu funcional del producte és permetre que un usuari pugui:

- registrar-se
- iniciar sessió
- accedir a un dashboard privat
- crear tasques
- veure només les seves tasques
- marcar-les com a completades o pendents
- eliminar-les

A més del producte en si, el projecte també serveix com a entorn d’aprenentatge per treballar desenvolupament assistit amb IA de manera estructurada, controlada i pedagògica.

---

## tipus de projecte

Projecte SaaS educatiu i escalable, construït amb un workflow AI-first.

El producte principal és l’aplicació LiteTasks.  
El sistema d’agents, prompts i documents és el mètode de treball per construir-lo.

---

## fase actual

Fase final de preparació de la base tècnica del MVP.

En aquest moment:
- la idea del producte està definida
- l’arquitectura inicial està definida
- el backlog inicial de tasks està definit
- el sprint actual està centrat en preparar la base tècnica
- la base tècnica del producte ja està preparada i el següent pas és començar la implementació funcional

---

## estat actual resumit

### ja implementat

- estructura base del projecte
- aplicació Next.js inicial operativa
- scripts de desenvolupament funcionals
- validació inicial de compilació i arrencada
- base inicial de l'aplicació Next.js
- estructura del projecte
- configuració de Prisma
- base de dades SQLite local
- sistema de migracions inicial
- model User definit
- model Task definit amb relació a User

### ja definit
- visió general del producte
- especificació inicial del MVP
- arquitectura inicial del sistema
- estructura de treball basada en documents
- backlog inicial de tasks
- focus del sprint actual

### pendent d’implementar
- base real de l’aplicació
- autenticació
- dashboard privat
- CRUD bàsic de tasques
- tests mínims
- refinament funcional del MVP

---

## producte definit actualment

LiteTasks és una aplicació web de gestió de tasques personals amb autenticació.

Característiques previstes del MVP:
- registre d’usuari
- login
- logout
- dashboard privat
- creació de tasques
- llistat de tasques pròpies
- canvi d’estat de tasques
- eliminació de tasques

No formen part del MVP actual:
- equips
- col·laboració
- etiquetes
- prioritats
- recordatoris
- app mòbil
- integracions externes

---

## stack previst

### frontend
- Next.js
- React
- TypeScript

### backend
- Next.js Route Handlers o Server Actions

### persistència
- Prisma
- SQLite en desenvolupament local

### autenticació
- sistema basat en sessió
- solució concreta pendent d’implementar

### testing
- validació manual del flux principal
- tests mínims de validació i lògica crítica

---

## components principals previstos

### producte
- web app
- auth module
- tasks module
- database layer

### sistema de treball
- Orchestrator
- Agents
- Prompts
- Documents d’estat
- Documents d’artefactes
- Registre de decisions i testing

---

## documents clau actuals

- `docs/01_SPEC.md`
- `docs/02_ARCHITECTURE.md`
- `docs/03_TASKS.md`
- `docs/04_DECISIONS.md`
- `docs/05_TESTING.md`
- `docs/06_CURRENT_SPRINT.md`

---

## sprint actual

El sprint actual està orientat a deixar preparada la base tècnica del projecte.

Tasks actives:
- TASK-005 — crear validació d’input per al registre
- TASK-006 — implementar registre d’usuari
- TASK-007 — implementar login

Tasks completades sprint anterior sprint:
- TASK-001 — inicialitzar l’aplicació base
- TASK-002 — configurar Prisma i SQLite
- TASK-003 — definir el model User
- TASK-004 — definir el model Task

Task actual:

TASK-005 — crear validació d’input per al registre
---

## restriccions actuals

- mantenir el MVP simple
- no afegir funcionalitats fora d’abast
- evitar sobredisseny
- implementar una task cada vegada
- mantenir coherència entre codi i documentació
- fer servir la IA amb context limitat i objectius clars

---

## riscos actuals

- voler implementar massa coses de cop
- barrejar arquitectura i implementació sense focus
- perdre control del context en prompts massa grans
- desalinear documentació i estat real del codi
- sobredissenyar abans de tenir un MVP funcional

---

## definició d’èxit de la fase actual

Aquesta fase es considerarà ben completada quan:

- el projecte arrenqui en local
- Prisma estigui configurat
- SQLite funcioni
- el model User estigui definit
- el model Task estigui definit
- les migracions inicials funcionin
- la documentació continuï reflectint l’estat real

---

## següent pas correcte

Executar `TASK-004 — definir el model Task` respectant:

- `docs/01_SPEC.md`
- `docs/02_ARCHITECTURE.md`
- `docs/03_TASKS.md`
- `docs/06_CURRENT_SPRINT.md`

Després, continuar amb:
- TASK-008
- TASK-009
- TASK-010
