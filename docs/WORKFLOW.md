cat > docs/WORKFLOW.md <<'EOF'
# WORKFLOW

## objectiu
Definir el flux estàndard de treball del sistema AI-first.

## principi general
El sistema treballa per fases.
Cada fase té un agent responsable, uns inputs limitats i un output estructurat.
L'orquestrador decideix quin agent toca executar segons l'estat del projecte.

## flux principal

Explorer  
↓  
Spec Writer  
↓  
Architect  
↓  
Planner  
↓  
Implementer  
↓  
Reviewer  
↓  
Archivist  

## descripció de cada fase

### Explorer
Analitza el projecte, el context i l'estat actual.
Output esperat: exploració estructurada.

### Spec Writer
Converteix l'exploració en una especificació clara del sistema.
Output esperat: SPEC.

### Architect
Transforma la SPEC en una arquitectura tècnica d'alt nivell.
Output esperat: ARCHITECTURE.

### Planner
Divideix la feina en increments petits i task concretes.
Output esperat: TASKS.

### Implementer
Implementa només la task activa.
Output esperat: resultat d'implementació.

### Reviewer
Revisa qualitat, coherència, riscos i necessitat de tests.
Output esperat: review estructurada.

### Archivist
Guarda decisions, aprenentatges i resum de l'estat.
Output esperat: entrada de memòria o decisions.

## approval gates
Hi ha aturades obligatòries abans de:
- passar de spec a arquitectura si el problema no està clar
- implementar canvis grans
- considerar una fase com validada

## documents clau
- docs/00_PROJECT_STATE.md
- docs/01_SPEC.md
- docs/02_ARCHITECTURE.md
- docs/03_TASKS.md
- docs/06_CURRENT_SPRINT.md

## contractes
Cada agent ha de seguir el contracte definit a la carpeta `contracts/`.

## artifacts
Les sortides generades pels agents es poden guardar a `artifacts/` per conservar execucions sense sobreescriure documents base.
EOF