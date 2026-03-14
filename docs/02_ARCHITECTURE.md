# ARCHITECTURE

## stack tecnològic

frontend:
No cal un frontend específic en el MVP. La interfície principal és textual i basada en fitxers Markdown dins del repositori.

backend:
Orquestrador documental i sistema d’agents executats sobre Codex, amb lògica de workflow guiada per prompts i fitxers d’estat.

database:
No és necessària una base de dades en aquesta fase. La font de veritat és el sistema de fitxers del repositori.

testing:
Validació manual del workflow i comprovació de consistència entre documents, prompts i outputs estructurats.

---

## components

Orchestrator  
Selecciona l’agent correcte i controla el flux del procés.

Agents  
Explorer, Spec Writer, Architect, Planner, Implementer, Reviewer i Archivist.

Prompt Runner  
Prompts que defineixen com executar cada agent.

State Documents  
Documents que representen l'estat del projecte i del workflow.

---

## estructura del repositori

agents/  
Definició dels agents i els seus contractes.

prompts/  
Prompts d'execució per cada agent.

docs/  
Documents d'estat i artefactes del workflow.

memory/  
Informació persistent del sistema.

skills/  
Registre d'habilitats disponibles.

src/  
Codi d'aplicació futur.

tests/  
Tests del sistema.

---

## flux de dades

Usuari  
↓  
Orchestrator  
↓  
Agent seleccionat  
↓  
Documents d’estat i context  
↓  
Output estructurat en Markdown  
↓  
Següent agent del workflow

---

## models principals

ProjectState  
Conté objectiu del projecte, estat actual, components implementats, components pendents, stack i objectiu següent.

CurrentSprint  
Conté objectiu del sprint, tasca actual, estat, fitxers tocables, criteris de completat, bloquejos i següent pas.

AgentDefinition  
Defineix rol, objectiu, inputs permesos, regles i format de sortida de cada agent.

PromptDefinition  
Defineix com s’executa cada agent amb context mínim i amb quins documents ha de treballar.

ArtifactDocument  
Representa els lliurables del workflow: exploration, spec, architecture, tasks, decisions i testing.

---

## decisions tècniques

- El sistema utilitza Markdown com a format base per mantenir simplicitat i traçabilitat.
- L'estat del sistema es manté en documents dins del repositori.
- El workflow es construeix primer com un procés seqüencial d’agents.
- No es fa servir base de dades en el MVP.

---

## riscos tècnics

- El sistema pot quedar només com una plantilla documental si no es defineix bé el comportament del router.
- Sense contractes d’output clars, els agents poden generar documents inconsistents.
- Si els documents deixen de reflectir l’estat real, es pot produir desalineació del sistema.

---

## següent pas

Crear pla d'implementació amb el Planner Agent.