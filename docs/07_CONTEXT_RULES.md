# CONTEXT RULES

## objectiu
Definir quin context mínim ha de carregar cada agent per evitar context bloat i mantenir respostes precises.

## principi general
Cada agent ha de llegir només:
- el seu fitxer d'agent
- el seu contracte de sortida
- els documents d'estat mínims
- els fitxers directament relacionats amb la seva tasca

No ha de llegir tot el repositori per defecte.

## context per agent

### Explorer
- README.md
- docs/00_PROJECT_STATE.md
- docs/06_CURRENT_SPRINT.md
- agents/explorer.md
- contracts/exploration.md

### Spec Writer
- resultat EXPLORATION
- docs/00_PROJECT_STATE.md
- docs/06_CURRENT_SPRINT.md
- agents/spec-writer.md
- contracts/spec.md

### Architect
- docs/01_SPEC.md
- docs/00_PROJECT_STATE.md
- docs/06_CURRENT_SPRINT.md
- agents/architect.md
- contracts/architecture.md

### Planner
- docs/01_SPEC.md
- docs/02_ARCHITECTURE.md
- docs/06_CURRENT_SPRINT.md
- agents/planner.md
- contracts/tasks.md

### Implementer
- docs/02_ARCHITECTURE.md
- docs/03_TASKS.md
- docs/06_CURRENT_SPRINT.md
- agents/implementer.md
- fitxers de codi afectats
- tests relacionats

### Reviewer
- docs/03_TASKS.md
- docs/05_TESTING.md
- docs/06_CURRENT_SPRINT.md
- agents/reviewer.md
- fitxers modificats
- tests rellevants

### Archivist
- docs/04_DECISIONS.md
- docs/06_CURRENT_SPRINT.md
- resultats de review o implementació
- agents/archivist.md

## regles addicionals

- no carregar tot `docs/` per defecte
- no carregar tot `memory/` per defecte
- no carregar tot `src/` si la task afecta pocs fitxers
- prioritzar sempre context mínim suficient
- si cal historial, usar resum en comptes de rellegir tota la història

## preferència de context

1. CURRENT_SPRINT
2. document principal de la fase
3. contracte de sortida
4. fitxers afectats
5. memòria resumida només si és necessària