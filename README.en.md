# 🤖 AI Project Template

An **AI-First software development template** designed to build applications using orchestrated AI agents and **Spec-Driven Development (SDD)**.

Instead of relying on long conversations with AI, this template introduces a **structured system of agents, documents and workflows** that allows AI to participate in software development in a controlled and scalable way.

The developer remains the **architect and decision maker**, while AI agents assist with planning, coding and reviewing.

---

# 🚀 Why This Template Exists

Many developers use AI like this:

```
Ask AI → get code → fix problems → repeat
```

This often causes:

- context loss
- inconsistent architecture
- fragile code
- difficult maintenance

This template proposes a structured workflow:

```
Specification → Planning → Implementation → Review
```

---

# 🧠 Core Idea

Development becomes a process of **defining intent and orchestrating execution**.

Each phase is executed by a specialized AI agent.

---

# ⚙️ Multi-Agent Workflow

```
User → Router → Planner → Implementer → Reviewer
```

Each agent has a **clear responsibility**, reducing context overload and improving results.

---

# 📂 Project Structure

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

# 🧩 Development Workflow

## 1. Define the Specification

Edit:

```
docs/01_SPEC.md
```

Describe requirements and expected behaviour.

---

## 2. Plan the Work

Planner agent generates structured tasks in:

```
docs/03_TASKS.md
```

Example:

```
TASK-001 Create user model
TASK-002 Implement authentication
TASK-003 Add password hashing
```

---

## 3. Implement

Implementer reads:

```
docs/03_TASKS.md
docs/02_ARCHITECTURE.md
docs/06_CURRENT_SPRINT.md
```

and generates code.

---

## 4. Review

Reviewer checks:

- architecture
- code quality
- security
- missing tests

---

# 🛠 Compatible Tools

Works with:

- Codex
- Claude Code
- Cursor
- OpenCode
- VS Code AI tools

---

# 📜 License

MIT License