# TYPESCRIPT

## Para compilar carpetas

Typescript solamente trabaja con archivos ts pero si tambien se quiere que se compile la carpeta publica se debe agregar ciertas cosas

copyfiles es una aplicacion de desarrollo solamente
npm install copyfiles -g

### en package.json se configura:
en "scripts": copyfiles | --up 1 (directorios hacia arriba ara obviar) | los archivos a copiar | la carpeta en la que se quiere tener los archivos
```bash
"html": "copyfiles --up 1 src/public/*.html dist"
```

luego llamar al comando
```bash
npm run html
```
pero si se quiere hacer el tsc y el npm en un solo comando se crea en el scripts del package.json un build para llamar a ambos a la vez
```bash
npm run build
```

build no es nada mas que "tsc && npm run html"