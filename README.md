# Writer Friend Page (React + TypeScript + Tailwind)

SPA para la pagina personal de un escritor con dos colecciones:

- `cuentos`
- `fancines` (etiquetado en UI como fanfics)

No usa backend. Todo el contenido sale de un JSON local.

## Rutas

- `/` portada con secciones de cuentos y fanfics
- `/cuentos` listado completo de cuentos
- `/fancines` listado completo de fanfics
- `/cuentos/:slug` lectura completa
- `/fancines/:slug` lectura completa

## Fuente de datos

`/src/data/library.json`

Formato requerido:

```json
{
  "fancines": [
    {
      "name": "string",
      "duration of read": "string",
      "text": "rich text/html",
      "image cover": "string link",
      "price": "string"
    }
  ],
  "cuentos": [
    {
      "name": "string",
      "duration of read": "string",
      "text": "rich text/html",
      "image cover": "string link",
      "price": "string"
    }
  ]
}
```

## Arquitectura (SOLID orientada)

- `domain`: modelos y tipos del negocio
- `application`: interfaces y servicios
- `infrastructure`: implementacion de repositorio JSON
- `features/pages/components`: UI segmentada y mantenible

La UI consume `StoryService`, no el JSON en directo.

## Ejecutar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
