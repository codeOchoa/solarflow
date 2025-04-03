# SolarFlow

Índice:
1. [Descripcion](#descripcion)  
2. [Documentacion](#documentacion)  
3. [Bugs](#bugs)

## Descripcion:
Tienda sobre Energías Renovables, contiene gestor de artículos, autentificación y manejo de base de datos con Firebase.

El objetivo de este proyecto es proporcionar una solución innovadora y centralizada para gestionar y optimizar los sistemas de energia solar. Nuestra solución es la de implementar una plataforma digital avanzada que permitirá a los usuarios supervisar en tiempo real el rendimiento de sus sistema solares, recibir notificaciones automaticas de fallos, integrar la red eléctrica tradicional y optimizar el uso de la energía almacenada, todo con herramientas personalizables para generar informes detallados y maximizar el ahorro energético.

**Dependencias:**
- firebase
- flowbite
- nanoid
- next
- next-auth
- react
- react-icons
- zustand

<!-- "dependencies": {
    "@headlessui/react": "^1.7.18",
    "@prisma/client": "^5.10.2",
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "@types/bcryptjs": "^2.4.6",
    "@types/react-slick": "^0.23.13",
    "bcryptjs": "^2.4.3",
    "express-fileupload": "^1.5.0",
    "flowbite-react": "^0.7.2",
    "nanoid": "^5.0.6",
    "next": "14.1.0",
    "next-auth": "^4.24.6",
    "react": "^18",
    "react-apexcharts": "^1.4.1",
    "react-dom": "^18",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.0.1",
    "react-slick": "^0.30.2",
    "slick-carousel": "^1.8.1",
    "svgmap": "^2.10.1",
    "zod": "^3.22.4",
    "zustand": "^4.5.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "daisyui": "^4.7.2",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "prisma": "^5.10.2",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  } -->

## Documentacion:
Para lanzar el proyecto en modo desarollo escribe lo siguiente en la consola:

```bash
npm run dev
```

Podrás utilizar la interfaz de la página, dentro de la misma podrás navegar entre las diferentes páginas disponibles (es probable que algunas aún estén en desarrollo y por lo tanto o no carguen, o se visualicen de manera incorrecta o te encuentres con algun desperfecto):

- [http://localhost:3000](http://localhost:3000)

Para dejar de ejecutar el proyecto, seleccionar la ventana de la termial donde se esté ejecutando y presionar las siguientes teclas: Ctrl+C.

## Bugs:

# 1:
Al crear un producto nuevo en realTimepProducts, si bien se crea correctamente, el programa no actualiza la lista, por lo que por un lado favorece a el estilo ya creado, pero el nuevo no se le aplica el estilo.

# 2:
Deberia aplicarse un fondo claro para darle contraste al favicon de la pagina ya que en temas oscuros no se aprecia el icono.