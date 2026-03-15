# TASKS

## objectiu general

Construir el MVP de LiteTasks com una aplicació SaaS simple de control de tasques personals amb:

- registre
- login
- dashboard privat
- creació de tasques
- llistat de tasques pròpies
- canvi d’estat pendent/completada
- eliminació de tasques

El desenvolupament s’ha de fer en increments petits, amb tasques clares i validables, per facilitar el treball assistit amb IA i mantenir el control del projecte.

---

## criteris generals per a totes les tasks

Cada task s’ha de considerar completada només si:

- compleix l’objectiu funcional definit
- no toca fitxers fora de l’abast necessari
- respecta `01_SPEC.md`
- respecta `02_ARCHITECTURE.md`
- es pot validar manualment
- no introdueix complexitat innecessària
- si afecta decisions importants, s’actualitza `04_DECISIONS.md`
- si afecta validació, s’actualitza `05_TESTING.md`

---

# increment 1 — base tècnica del projecte

## TASK-001 — inicialitzar l’aplicació base

### objectiu
Crear la base del projecte amb el stack triat perquè l’aplicació pugui arrencar en local.

### resultat esperat
- projecte inicial creat
- estructura mínima funcional
- scripts bàsics disponibles
- arrencada local correcta

### fitxers habituals afectats
- `package.json`
- `tsconfig.json`
- `app/**`
- `src/**`
- configuracions bàsiques del projecte

### definition of done
- l’aplicació arrenca en local
- no hi ha errors de compilació inicials
- existeix estructura base coherent amb arquitectura

---

## TASK-002 — configurar Prisma i SQLite

### objectiu
Preparar la capa de persistència local per al MVP.

### resultat esperat
- Prisma instal·lat
- SQLite configurat
- fitxer `schema.prisma` creat
- primera migració funcional

### fitxers habituals afectats
- `prisma/schema.prisma`
- `prisma/migrations/**`
- fitxers de configuració relacionats

### definition of done
- Prisma funciona correctament
- la base de dades local es pot generar
- la migració inicial s’executa sense errors

---

## TASK-003 — definir el model User

### objectiu
Crear l’entitat d’usuari del sistema.

### resultat esperat
El model ha de contemplar:
- id
- email únic
- passwordHash
- createdAt
- updatedAt

### fitxers habituals afectats
- `prisma/schema.prisma`

### definition of done
- el model User existeix
- email és únic
- timestamps definits
- migració generada correctament

---

## TASK-004 — definir el model Task

### objectiu
Crear l’entitat de tasca i la seva relació amb l’usuari.

### resultat esperat
El model ha de contemplar:
- id
- title
- description opcional
- completed
- userId
- createdAt
- updatedAt

### fitxers habituals afectats
- `prisma/schema.prisma`

### definition of done
- el model Task existeix
- la relació amb User està definida
- el camp `completed` existeix
- la migració funciona

---

# increment 2 — autenticació bàsica

## TASK-005 — crear validació d’input per al registre

### objectiu
Validar les dades d’entrada abans de crear un usuari.

### resultat esperat
Com a mínim:
- email vàlid
- contrasenya no buida
- missatges d’error controlats

### fitxers habituals afectats
- `src/validations/**`
- `src/features/auth/**`

### definition of done
- la validació existeix
- detecta casos invàlids bàsics
- es pot reutilitzar en registre

---

## TASK-006 — implementar registre d’usuari

### objectiu
Permetre que un usuari es pugui registrar.

### resultat esperat
- es crea el nou usuari
- la contrasenya es desa hasheada
- es controla el cas d’email duplicat

### fitxers habituals afectats
- `app/register/**`
- `src/features/auth/**`
- `src/db/**`

### definition of done
- un usuari nou es pot registrar
- no es guarda cap contrasenya en text pla
- email duplicat dona error controlat

---

## TASK-007 — implementar login

### objectiu
Permetre que un usuari registrat pugui iniciar sessió.

### resultat esperat
- login funcional
- credencials incorrectes controlades
- sessió creada correctament

### fitxers habituals afectats
- `app/login/**`
- `src/features/auth/**`

### definition of done
- usuari vàlid pot entrar
- usuari invàlid no pot entrar
- la sessió queda operativa

---

## TASK-008 — protegir les rutes privades

### objectiu
Evitar que un usuari no autenticat pugui accedir al dashboard.

### resultat esperat
- dashboard protegit
- redirecció o bloqueig si no hi ha sessió

### fitxers habituals afectats
- `app/dashboard/**`
- `src/features/auth/**`
- middleware o equivalent si s’utilitza

### definition of done
- un usuari no autenticat no accedeix al dashboard
- un usuari autenticat sí que hi accedeix

---

## TASK-009 — implementar logout

### objectiu
Permetre tancar sessió.

### resultat esperat
- l’usuari pot sortir de la seva sessió
- després del logout ja no pot accedir a la zona privada sense tornar-se a autenticar

### fitxers habituals afectats
- `src/features/auth/**`
- components relacionats amb navegació o dashboard

### definition of done
- logout funcional
- sessió tancada correctament

---

# increment 3 — funcionalitat principal de tasques

## TASK-010 — crear la UI bàsica del dashboard

### objectiu
Construir una pantalla privada simple que sigui la base del producte.

### resultat esperat
El dashboard ha de tenir com a mínim:
- capçalera simple
- espai per al formulari de nova tasca
- espai per al llistat de tasques
- botó o acció de logout

### fitxers habituals afectats
- `app/dashboard/**`
- components UI necessaris

### definition of done
- el dashboard es veu correctament
- la seva estructura és clara i usable

---

## TASK-011 — crear formulari de nova tasca

### objectiu
Permetre introduir una nova tasca.

### resultat esperat
Camps mínims:
- title obligatori
- description opcional

### fitxers habituals afectats
- `app/dashboard/**`
- `src/features/tasks/**`
- `src/validations/**`

### definition of done
- formulari visible
- title obligatori
- errors bàsics controlats

---

## TASK-012 — implementar la creació de tasca

### objectiu
Desar una nova tasca per a l’usuari autenticat.

### resultat esperat
- es crea la tasca
- queda vinculada al userId correcte
- no es permet crear tasques buides

### fitxers habituals afectats
- `src/features/tasks/**`
- `src/db/**`
- endpoint o server action corresponent

### definition of done
- la tasca es desa correctament
- només es crea per a l’usuari autenticat
- el title buit es rebutja

---

## TASK-013 — implementar el llistat de tasques

### objectiu
Mostrar les tasques de l’usuari autenticat.

### resultat esperat
- es mostren només les tasques pròpies
- es gestiona correctament el cas de llista buida

### fitxers habituals afectats
- `app/dashboard/**`
- `src/features/tasks/**`

### definition of done
- l’usuari veu només les seves tasques
- la llista es renderitza correctament
- el cas “sense tasques” és clar

---

## TASK-014 — implementar canvi d’estat de la tasca

### objectiu
Permetre marcar una tasca com a pendent o completada.

### resultat esperat
- toggle funcional
- només sobre tasques pròpies

### fitxers habituals afectats
- `src/features/tasks/**`
- UI del llistat de tasques

### definition of done
- el camp `completed` s’actualitza correctament
- l’usuari no pot modificar tasques alienes
- la UI reflecteix l’estat actual

---

## TASK-015 — implementar eliminació de tasca

### objectiu
Permetre eliminar una tasca pròpia.

### resultat esperat
- eliminació funcional
- validació de propietat

### fitxers habituals afectats
- `src/features/tasks/**`
- UI del llistat de tasques

### definition of done
- la tasca desapareix correctament
- no es poden eliminar tasques alienes

---

# increment 4 — qualitat mínima i consistència

## TASK-016 — afegir gestió bàsica d’errors a la UI

### objectiu
Mostrar errors de manera comprensible per a l’usuari.

### resultat esperat
- errors clars en registre
- errors clars en login
- errors clars en creació de tasca

### fitxers habituals afectats
- `app/register/**`
- `app/login/**`
- `app/dashboard/**`

### definition of done
- els errors comuns es mostren de forma entenedora
- no s’exposen errors interns bruts

---

## TASK-017 — crear tests bàsics de validació

### objectiu
Cobrir les validacions mínimes del sistema.

### resultat esperat
Com a mínim:
- validació de registre
- validació de creació de tasca

### fitxers habituals afectats
- `tests/**`
- `src/validations/**`

### definition of done
- els tests passen en local
- cobreixen casos vàlids i invàlids bàsics

---

## TASK-018 — crear tests bàsics de propietat i accés

### objectiu
Validar que cada usuari només pot operar sobre les seves tasques.

### resultat esperat
- comprovacions bàsiques de propietat
- comprovacions bàsiques d’accés

### fitxers habituals afectats
- `tests/**`
- `src/features/tasks/**`
- `src/features/auth/**`

### definition of done
- existeixen proves mínimes de seguretat funcional
- els casos bàsics passen

---

## TASK-019 — alinear documentació amb implementació

### objectiu
Fer que els documents reflecteixin l’estat real del projecte.

### resultat esperat
Actualitzar si cal:
- `04_DECISIONS.md`
- `05_TESTING.md`
- `06_CURRENT_SPRINT.md`
- `00_PROJECT_STATE.md`

### definition of done
- la documentació no contradiguïx el codi
- l’estat actual és clar

---

# increment 5 — tancament del MVP

## TASK-020 — revisar el flux principal de punta a punta

### objectiu
Verificar que el MVP ja cobreix el flux principal complet.

### flux a validar
- registre
- login
- accés al dashboard
- creació de tasca
- llistat de tasques
- completar tasca
- eliminar tasca
- logout

### definition of done
- el flux principal funciona de punta a punta
- el producte és usable
- el MVP queda llest per a una següent fase de millora

---

## ordre recomanat d’execució

1. TASK-001
2. TASK-002
3. TASK-003
4. TASK-004
5. TASK-005
6. TASK-006
7. TASK-007
8. TASK-008
9. TASK-009
10. TASK-010
11. TASK-011
12. TASK-012
13. TASK-013
14. TASK-014
15. TASK-015
16. TASK-016
17. TASK-017
18. TASK-018
19. TASK-019
20. TASK-020

---

## criteri estratègic

Aquest projecte no s’ha d’implementar com una única petició gran a la IA.

La manera correcta de treballar és:

- una task per vegada
- context mínim necessari
- validació després de cada task
- revisió contra spec i arquitectura
- actualització de l’estat del projecte

L’objectiu no és només avançar ràpid, sinó entendre què s’està construint i mantenir el control del sistema.