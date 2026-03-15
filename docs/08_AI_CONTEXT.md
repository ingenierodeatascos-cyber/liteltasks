# AI CONTEXT

Aquest document proporciona context persistent perquè eines d’IA
(ChatGPT, Codex o agents futurs) entenguin el projecte LiteTasks
sense necessitat de llegir tot el repositori.

La informació aquí descrita s’ha de respectar abans de generar codi
o prendre decisions d’arquitectura.

---

## 1. Projecte

Nom: LiteTasks

Tipus: aplicació SaaS simple de gestió de tasques personals.

Objectiu del MVP:
- registre d’usuari
- login
- dashboard privat
- crear tasques
- veure només les tasques pròpies
- marcar tasques com a completades
- eliminar tasques

No formen part del MVP actual:
- equips
- col·laboració
- etiquetes
- prioritats
- notificacions
- integracions externes

---

## 2. Workflow de desenvolupament

El projecte utilitza un enfocament **Spec-Driven Development assistit amb IA**.

Ordre de treball obligatori:

1. definir especificació
2. definir arquitectura
3. definir tasks
4. definir sprint actual
5. implementar una task
6. revisar resultat
7. continuar amb la següent task

Els documents del projecte són la font de veritat.

---

## 3. Documents clau del projecte

Els següents fitxers defineixen l’estat del projecte:

docs/00_PROJECT_STATE.md  
Estat global del projecte.

docs/01_SPEC.md  
Especificació funcional del producte.

docs/02_ARCHITECTURE.md  
Arquitectura tècnica.

docs/03_TASKS.md  
Backlog complet de tasks.

docs/06_CURRENT_SPRINT.md  
Sprint actual i task activa.

Les eines d’IA han de llegir aquests documents abans de modificar el codi.

---

## 4. Stack tecnològic

Frontend i backend:
Next.js + React + TypeScript

Persistència:
Prisma ORM

Base de dades local:
SQLite

Altres eines:
Node.js
npm

---

## 5. Estructura principal del repositori

app/
rutes de l’aplicació Next.js

src/
codi d’aplicació

src/features/
mòduls de domini (auth, tasks)

src/db/
configuració de base de dades

src/validations/
validacions de dades

src/lib/
utilitats i components compartits

prisma/
schema.prisma i migracions

docs/
documentació del projecte

---

## 6. Regles per a la IA

Quan una IA generi codi per aquest projecte ha de seguir aquestes regles:

1. implementar només la task actual
2. no modificar parts fora de l’abast de la task
3. no redefinir el producte
4. no introduir funcionalitats fora del MVP
5. no afegir complexitat innecessària
6. respectar l’arquitectura definida
7. mantenir el codi simple i llegible

---

## 7. Regles de modelatge

El model de dades ha de seguir el principi:

simplictat > flexibilitat prematura

Només s’han d’afegir camps o taules si el MVP ho requereix.

---

## 8. Patró de treball amb IA

El flux habitual és:

definir task  
↓  
crear prompt per a la task  
↓  
executar implementació amb Codex  
↓  
revisar el resultat  
↓  
actualitzar documentació  
↓  
continuar amb la següent task

---

## 9. Error habitual a evitar

No implementar múltiples funcionalitats alhora.

El projecte s’ha de construir incrementalment.

Una task = una responsabilitat clara.

---

## 10. Objectiu del projecte

A més del producte LiteTasks, aquest repositori serveix per aprendre:

- desenvolupament assistit amb IA
- gestió de context
- arquitectura incremental
- workflow professional amb IA