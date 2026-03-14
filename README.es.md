# 🤖 Plantilla de Proyecto AI-First

Plantilla de desarrollo **AI-First** para construir aplicaciones utilizando **agentes de IA orquestados** y **Spec-Driven Development (SDD)**.

En lugar de depender de largas conversaciones con IA, esta plantilla introduce un **sistema estructurado de agentes, documentos y workflows**.

El desarrollador sigue siendo **el arquitecto y responsable de las decisiones**, mientras los agentes de IA ayudan con planificación, implementación y revisión.

---

# 🚀 Por qué existe esta plantilla

Muchos desarrolladores utilizan IA así:

```
Preguntar a la IA → obtener código → arreglar errores → repetir
```

Esto suele provocar:

- pérdida de contexto
- arquitectura inconsistente
- código frágil
- mantenimiento difícil

La plantilla propone este flujo:

```
Especificación → Planificación → Implementación → Revisión
```

---

# 🧠 Idea principal

El desarrollo pasa a ser un proceso de **definir la intención y orquestar la ejecución**.

Cada fase es ejecutada por un agente especializado.

---

# ⚙️ Flujo de agentes

```
Usuario → Router → Planner → Implementer → Reviewer
```

---

# 📂 Estructura del proyecto

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

# 🧩 Workflow de desarrollo

## 1. Definir la especificación

Editar:

```
docs/01_SPEC.md
```

---

## 2. Planificar

El planner genera tareas en:

```
docs/03_TASKS.md
```

Ejemplo:

```
TASK-001 Crear modelo de usuario
TASK-002 Implementar autenticación
TASK-003 Hash de contraseñas
```

---

## 3. Implementar

El implementer lee:

```
docs/03_TASKS.md
docs/02_ARCHITECTURE.md
docs/06_CURRENT_SPRINT.md
```

y genera el código.

---

## 4. Revisar

El reviewer valida:

- arquitectura
- calidad de código
- seguridad
- tests

---

# 🛠 Herramientas compatibles

Funciona con:

- Codex
- Claude Code
- Cursor
- OpenCode
- VS Code AI tools

---

# 📜 Licencia

MIT License