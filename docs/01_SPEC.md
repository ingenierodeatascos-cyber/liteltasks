# SPEC

## 1. Visión del producto

LiteTasks es una aplicación SaaS simple para la gestión personal de tareas.

El objetivo del producto es permitir que un usuario pueda:

- registrarse
- iniciar sesión
- crear tareas
- ver sus tareas
- marcar tareas como completadas
- eliminar tareas

La aplicación debe ser simple, educativa y escalable.  
Este proyecto se construye también como entorno de aprendizaje para entender cómo desarrollar software asistido por IA con un enfoque Spec-Driven Development.

---

## 2. Problema que resuelve

Muchas apps de tareas son demasiado complejas para aprender con ellas como primer SaaS.

LiteTasks resuelve un problema más concreto:

> ofrecer una base pequeña pero realista de aplicación SaaS donde practicar autenticación, persistencia de datos, CRUD, organización por usuario y desarrollo guiado por especificaciones.

---

## 3. Usuario objetivo

### Usuario principal
Persona individual que quiere gestionar sus tareas personales en una aplicación sencilla.

### Usuario secundario
Estudiante o desarrollador junior que quiere aprender cómo se estructura un SaaS real usando IA sin perder el control del proceso.

---

## 4. Objetivos del MVP

El MVP debe permitir:

1. registro de usuario con email y contraseña
2. inicio de sesión
3. cierre de sesión
4. acceso a un dashboard privado
5. crear una tarea
6. listar las tareas del usuario autenticado
7. marcar una tarea como completada o pendiente
8. eliminar una tarea

---

## 5. Fuera de alcance en esta fase

Estas funcionalidades no forman parte del MVP:

- trabajo en equipo
- compartir tareas con otros usuarios
- etiquetas avanzadas
- prioridades
- fechas límite
- recordatorios por email
- panel de administración
- multi-tenant avanzado
- API pública
- app móvil nativa
- integraciones externas
- automatización completa del router o ejecución paralela real de agentes

---

## 6. Funcionalidades del MVP

### 6.1 Registro
El usuario puede crear una cuenta con email y contraseña.

### 6.2 Login
El usuario puede iniciar sesión con sus credenciales.

### 6.3 Dashboard privado
Solo los usuarios autenticados pueden acceder a su zona privada.

### 6.4 Crear tarea
El usuario puede crear una tarea con:
- título obligatorio
- descripción opcional

### 6.5 Ver tareas
El usuario puede ver una lista de sus tareas.

Cada tarea debe mostrar:
- título
- descripción si existe
- estado
- fecha de creación

### 6.6 Cambiar estado
El usuario puede marcar una tarea como:
- pendiente
- completada

### 6.7 Eliminar tarea
El usuario puede borrar una tarea propia.

---

## 7. Reglas de negocio

1. Cada usuario solo puede ver sus propias tareas.
2. Cada tarea pertenece a un único usuario.
3. El título de una tarea es obligatorio.
4. No se permiten tareas vacías.
5. Un usuario no puede editar ni borrar tareas de otro usuario.
6. Las rutas privadas deben requerir autenticación.
7. El sistema debe guardar el estado de completada o pendiente.
8. El email debe ser único por usuario.

---

## 8. Requisitos no funcionales

### Simplicidad
La solución debe ser fácil de entender para un estudiante.

### Escalabilidad básica
Aunque el MVP sea simple, la estructura debe permitir crecer más adelante.

### Legibilidad
El código debe ser claro y modular.

### Trazabilidad
Las decisiones importantes deben quedar documentadas.

### Desarrollo asistido por IA con control
La IA puede ayudar a planificar e implementar, pero las decisiones de producto, arquitectura y revisión final deben ser humanas.

---

## 9. Flujo principal de usuario

### Flujo principal
1. el usuario entra en la aplicación
2. se registra o inicia sesión
3. accede a su dashboard
4. crea una tarea
5. ve la tarea en la lista
6. marca la tarea como completada
7. elimina una tarea si ya no la necesita

---

## 10. Edge cases

1. intento de registro con email ya existente
2. login con credenciales inválidas
3. acceso a dashboard sin sesión iniciada
4. creación de tarea sin título
5. intento de borrar una tarea inexistente
6. intento de modificar una tarea de otro usuario
7. lista vacía de tareas
8. descripción vacía
9. sesión expirada
10. errores de base de datos o validación

---

## 11. Entidades principales

### User
- id
- email
- passwordHash
- createdAt
- updatedAt

### Task
- id
- title
- description
- completed
- userId
- createdAt
- updatedAt

---

## 12. Criterios de éxito del MVP

El MVP se considera completado cuando:

- un usuario puede registrarse
- un usuario puede iniciar sesión
- un usuario autenticado puede crear tareas
- solo ve sus propias tareas
- puede marcar tareas como completadas
- puede eliminarlas
- existen validaciones mínimas
- existen pruebas mínimas del flujo principal
- la documentación refleja el estado real del proyecto

---

## 13. Criterio pedagógico

Este proyecto no busca solo “funcionar”.

También debe servir para aprender:

- cómo pasar de idea a especificación
- cómo pasar de especificación a tareas
- cómo dividir trabajo para IA
- cómo revisar cambios antes de aceptarlos
- cómo construir un SaaS pequeño con criterio profesional