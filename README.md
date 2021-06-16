<<<<<<< HEAD
# TechoNext
hola
=======
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

Si no me equivoco ese archivo **next.config.js** es la configuración de webpack (Next usa webpack por detrás). Documentación de webpack **https://webpack.js.org/concepts/**

6. Para utilizar las clases de Tailwind es parecido a Bootstrap (Eg:**"mr-5" === margin-right: 5**), aunque tiene cosas diferentes; ver documentación en **https://tailwindcss.com/docs**

7. Para usar íconos (como el ícono de perfil del usuario): **https://heroicons.com/** (**npm install @heroicons/react**) ==> Después se importa el ícono que se quiera usar así **import { UserIcon } from '@heroicons/react/outline'** (puede ser outline o solid)

8. Si se quiere agregar otra página a la aplicación, se crea el archivo en **pages**

9. Si se quiere agregar otro componente a la aplicación, se crea el archivo en **components**

10. Para utilizar rutas se usa **useRouter()** de Next (no lo usé todavía jaja)

11. La carpeta **api** es lo que sería el servidor de Next. Ahí se pueden configurar cosas del backend supongo.

## Configuración Firestore

1. Hacerse cuenta en Firebase

2. Ingresar a la consola de Firebase 

3. Añade una aplicación WEB: ir a descripción (o información) general del proyecto, agregar un proyecto y agarrar el código

`var firebaseConfig = {
    apiKey: "AIzaSyBOVExy0eI-xXbYVCO9-yG07j8S9WK7MKs", /* el api key es único */
    authDomain: "fb-crud-b1ec5.firebaseapp.com",
    projectId: "fb-crud-b1ec5",
    storageBucket: "fb-crud-b1ec5.appspot.com",
    messagingSenderId: "827459989097",
    appId: "1:827459989097:web:d32310d166743062c87cf8"  /* el id es único */
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);`

y llevarlo a un archivo firebase.js en tu proyecto.

4. Importar  **import 'firebase/firestore'** en firebase.js

5. Exportar firestore: **export const db = fb.firestore();** ===> db va a ser la base de datos de firestore. Para usar la base de datos, importar **db** en donde se quiera usar, y usar los métodos de firestore que se detallan abajo (hay muchos más, pero son un ejemplo.)

6. Para crear un nuevo "esquema"
                    `db /* base de datos firestore */
                    .collection('links') /* creas el esquema/collection "links" */
                    .doc() /* guardas un doc nuevo y se genera un id único */
                    .set(Object) /* se le agrega a esa collection el Object (que viene desde algún estado) */`

7. Para editar un objeto específico de la colección: 
    `db.collection('links').doc(Id).update(Object)`

8. Para hacer get de un objeto específico: 
    `db.collection('links').doc(id).get();`

9. Para obtener todos los objetos:
            `db <!-- la firestore -->
            .collection('links') <!-- la colección -->
            .onSnapshot((querySnapshot) => { 
                const docs = []
                querySnapshot.forEach((doc) => { <!-- los objetos que vienen en un arreglo -->
                    docs.push({ ...doc.data(), id: doc.id })
                });
             `   

10. Para eliminar un objeto específico:
        `await   db <!-- se debe usar AWAIT o Promesas porque son operaciones asíncronas -->
                .collection('links') <!-- colección -->
                .doc(id)    <!-- obtengo objeto por ID -->
                .delete()   <!-- borro el objeto que coincide con ese ID -->
         `       
>>>>>>> 8f7926ea4da91faadf6869f8c69d5f7e49be4c85
