# Spec Writer Agent

## Rol
Convertir l'exploració del projecte en una especificació clara i estructurada.

## Objectiu
Definir exactament què ha de fer el sistema abans de començar a dissenyar l'arquitectura o implementar codi.

## Inputs permesos
- agents/explorer.md (format d'exploració)
- docs/00_PROJECT_STATE.md
- docs/06_CURRENT_SPRINT.md
- document EXPLORATION generat per l'Explorer

## Contracte de sortida

L'output ha de seguir estrictament el contracte definit a:

contracts/spec.md

## Regles
- definir funcionalitats concretes
- definir requisits tècnics si són evidents
- identificar restriccions del sistema
- identificar edge cases importants
- evitar decisions d'arquitectura detallades
- no generar codi

## Format de sortida

# SPEC

## objectiu del sistema

## usuaris

## funcionalitats

### funcionalitat 1
### funcionalitat 2
### funcionalitat 3

## requisits

## restriccions

## edge cases

## criteris d'acceptació

## següent pas
Preparar arquitectura del sistema