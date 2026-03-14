# 🤖 Plantilla de Projecte AI-First

Plantilla de desenvolupament **AI-First** per construir aplicacions utilitzant **agents d’IA orquestrats** i **Spec-Driven Development (SDD)**.

En lloc de dependre de llargues converses amb IA, aquesta plantilla introdueix un **sistema estructurat d’agents, documents i workflows**.

El desenvolupador continua sent **l’arquitecte i responsable de les decisions**, mentre que els agents d’IA ajuden en planificació, implementació i revisió.

---

# 🚀 Per què existeix aquesta plantilla

Molts desenvolupadors utilitzen IA així:

```
Preguntar a la IA → obtenir codi → arreglar errors → repetir
```

Això pot provocar:

- pèrdua de context
- arquitectura inconsistent
- codi fràgil
- manteniment difícil

Aquesta plantilla proposa un workflow estructurat:

```
Especificació → Planificació → Implementació → Revisió
```

---

# 🧠 Idea principal

El desenvolupament es converteix en un procés de **definir la intenció i orquestrar l’execució**.

Cada fase és executada per un agent d’IA especialitzat.

---

# ⚙️ Workflow d’agents

```
Usuari → Router → Planner → Implementer → Reviewer
```

Cada agent té una responsabilitat clara.

---

# 📂 Estructura del projecte

```
agents/
prompts/
contracts/
docs/
skills/

AGENTS.md
ORCHESTRATOR.md
README.md
```

---

# 🧩 Workflow de desenvolupament

## 1. Definir l’especificació

Edita:

```
docs/01_SPEC.md
```

---

## 2. Planificar

El planner genera tasques a:

```
docs/03_TASKS.md
```

Exemple:

```
TASK-001 Crear model d’usuari
TASK-002 Implementar autenticació
TASK-003 Hash de contrasenyes
```

---

## 3. Implementar

L’implementer llegeix:

```
docs/03_TASKS.md
docs/02_ARCHITECTURE.md
docs/06_CURRENT_SPRINT.md
```

i genera el codi.

---

## 4. Revisar

El reviewer comprova:

- arquitectura
- qualitat del codi
- seguretat
- tests

---

# 🛠 Eines compatibles

Funciona amb:

- Codex
- Claude Code
- Cursor
- OpenCode
- VS Code AI tools

---

# 📜 Llicència

MIT License