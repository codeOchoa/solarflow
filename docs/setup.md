Contenito Digital: "https://drive.google.com/file/d/16DjO7l-zPRvdApblaInn7Te-3FWtJRUY/view?usp=drive_link"

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Ejecuta el siguiente comando para exportar el proyecto como archivos estáticos:

```bash
npm run build
# and then
npm run export
```

Para desplegar el sitio en GitHub Pages, solo ejecuta:

```bash
npm run deploy
```

## Bugs

Para acceder completamente al contenido del sitio web es necesario acceder al localStorage desde el modo desarrollador del navegador, crear una constante llamada "isUserConnected" y darle el valor booleano "true".

## Firebase Deploy:

npm install -g firebase-tools

firebase --version

npm run build

clear

firebase login

*presionar y para aceptar y seleccionar el gmail*

firebase init

*seleccionamos Hosting, luego "use existing proyect", selecciono el porject, us-east1, directorio "dist", no desplegar en GitHub*

firebase deploy

----------------

## package.json

"scripts" retirados:
    "deploy": "gh-pages -d out"

"dependencies" retiradas:
    "animate.css": "^4.1.1",
    "aos": "^2.3.4",
    "lightbox2": "^2.11.5",
    "luxon": "^3.5.0",
    "toastify-js": "^1.12.0"

"devDependencies" retiradas:
    "autoprefixer": "^10.4.20",
    "gh-pages": "^6.2.0",
    "postcss": "^8.4.47",
    "react-router-dom": "^6.27.0", *este causa conflictos con el framework*
    "typescript": "^5"