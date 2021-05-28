# Página de Administrador de TECHO

## Cómo usar Next.js y Tailwind

1. Para crear una app con Tailwind ya configurado: **npx create-next-app -e with-tailwindcss nombre-del-proyecto**

2. Instalar packages: **npm i**

3. Para correr el proyecto: ir al directorio del proyecto y correr: **npm run dev**

4. Para cambiar color de fondo del proyecto (u otras cosas jajaj): ir a styles/globals.css, y cambiar ahí el color del body (o de lo que se quiera cambiar). Eg: 

    body {
        @apply bg-[#ffffff] text-white
    }

5. Para usar imágenes que no están cargadas en el proyecto (o sea, desde una url) hay que configurar el archivo **"next.config.js"**: agregar el dominio en **domains{images: []}**. Eg:

    images: {
        domains: [
            "www.nicepng.com", "image.tmdb.org"
        ]
    }

6. Para utilizar las clases de Tailwind es parecido a Bootstrap (Eg:**"mr-5" === margin-right: 5**), aunque tiene cosas diferentes; ver documentación en https://tailwindcss.com/docs

7. Para usar íconos (como el ícono de perfil del usuario): https://heroicons.com/ (**npm install @heroicons/react**) ==> Después se importa el ícono que se quiera usar así **import { UserIcon } from '@heroicons/react/outline'** (puede ser outline o solid)

8. Si se quiere agregar otra página a la aplicación, se crea el archivo en **pages**

9. Si se quiere agregar otro componente a la aplicación, se crea el archivo en **components**

10. Para utilizar rutas se usa **useRouter()** de Next (no lo usé todavía jaja)