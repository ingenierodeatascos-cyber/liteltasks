# CURRENT SPRINT

## objectiu del sprint

Preparar la base tècnica del MVP de LiteTasks perquè el projecte pugui començar a implementar autenticació i gestió de tasques sobre una estructura real i estable.

Aquest sprint no busca completar el producte final.  
Busca deixar el terreny preparat per construir-lo bé.

---

## focus actual

Construcció de la base mínima del projecte:

- aplicació inicial operativa
- configuració de Prisma
- base de dades SQLite local
- models principals del domini:
  - User
  - Task

---

## estat

in-progress

---

## tasks actives del sprint

- TASK-001 — inicialitzar l’aplicació base
- TASK-002 — configurar Prisma i SQLite
- TASK-003 — definir el model User
- TASK-004 — definir el model Task

---

## tasks completades en aquest sprint

- TASK-001 — inicialitzar l’aplicació base
- TASK-002 — configurar Prisma i SQLite
---

## task actual

- TASK-003 — definir el model User

---

## resultat esperat del sprint

En acabar aquest sprint, el projecte ha de tenir:

- aplicació arrencant en local
- estructura base coherent amb `02_ARCHITECTURE.md`
- Prisma configurat
- SQLite configurat
- model `User` definit
- model `Task` definit
- migracions inicials funcionant

Aquest sprint encara no exigeix:
- registre funcional
- login funcional
- dashboard complet
- CRUD de tasques
- tests amplis
- refinament visual

---

## documents de referència obligatoris

- `docs/01_SPEC.md`
- `docs/02_ARCHITECTURE.md`
- `docs/03_TASKS.md`

---

## fitxers que es poden tocar

- `app/**`
- `src/**`
- `prisma/**`
- `package.json`
- `tsconfig.json`
- fitxers de configuració necessaris per arrencar el projecte
- `docs/06_CURRENT_SPRINT.md`
- `docs/00_PROJECT_STATE.md` si cal reflectir progrés real
- `docs/04_DECISIONS.md` si apareix una decisió rellevant

---

## fitxers que no s’haurien de tocar sense necessitat clara

- `docs/01_SPEC.md`
- `docs/02_ARCHITECTURE.md`
- `docs/03_TASKS.md`
- `agents/**`
- `prompts/**`
- `contracts/**`
- `skills/**`

---

## criteris de completat del sprint

El sprint es considera completat quan:

1. el projecte arrenca correctament en local
2. Prisma està instal·lat i configurat
3. SQLite està operativa com a base de dades local
4. el model `User` existeix amb camps mínims correctes
5. el model `Task` existeix amb relació correcta amb `User`
6. la migració inicial s’ha executat sense errors
7. l’estructura creada és coherent amb l’arquitectura definida

---

## validació manual mínima

S’ha de poder comprovar que:

- el projecte compila o arrenca
- Prisma genera client sense errors
- la base de dades es crea correctament
- les migracions funcionen
- l’esquema reflecteix els models definits

---

## bloquejos possibles

- dubtes sobre l’estructura inicial de carpetes
- dubtes sobre si fer servir `app/` i `src/` alhora
- errors inicials de configuració de Prisma
- dubtes sobre el sistema d’autenticació futur que afectin mínimament el model `User`

---

## decisions que poden aparèixer en aquest sprint

Si durant el sprint cal decidir algun punt estructural, s’ha de registrar a `docs/04_DECISIONS.md`.

Exemples:
- estructura inicial definitiva de carpetes
- ubicació de validacions
- patró base per accés a dades
- convencions mínimes de noms

---

## què no s’ha de fer en aquest sprint

Per mantenir el focus, en aquest sprint no toca:

- implementar registre complet
- implementar login complet
- construir el dashboard funcional
- crear formulari de tasques
- implementar llistat de tasques
- afegir millores visuals avançades
- fer refactors grans fora de l’abast

---

## següent pas previst després d’aquest sprint

Quan aquest sprint estigui tancat, el següent sprint hauria d’entrar a:

- validació de registre
- registre d’usuari
- login
- protecció de rutes privades
- logout

És a dir, l’increment d’autenticació bàsica.
