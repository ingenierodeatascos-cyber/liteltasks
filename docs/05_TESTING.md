# TESTING

## validació mínima del sprint actual

- executar `npm run prisma:generate` i comprovar que Prisma genera el client sense errors
- executar `npx prisma migrate dev --name add_task_model` i comprovar que la migració s'aplica correctament sobre SQLite
- revisar que `prisma/schema.prisma` conté `User` i `Task` amb relació bidireccional
- revisar que `Task.completed` té valor per defecte `false`
- revisar que la migració crea la clau forana `Task.userId -> User.id`
