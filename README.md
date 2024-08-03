# Testturing - Jonathan Vera

Bienvenido a **Testturing**, una aplicación web desarrollada con **Next.js** y **React.js**, y en la que se utilizó una biblioteca de componentes de interfaz de usuario para React llamada **Material UI**, todo como parte de una prueba técnica para la empresa Turinng. A continuación, encontrarás las instrucciones para ejecutar la aplicación localmente, así como detalles importantes sobre el proyecto.

## Descripción del Proyecto

**Testturing** es una aplicación de una sola página (SPA) que permite a los usuarios coleccionar láminas digitales basadas en el universo de **Star Wars**. La aplicación utiliza el API RESTful público **Star Wars API (SWAPI)** https://swapi.dev/documentation para obtener datos sobre películas, personajes y naves del universo Star Wars.

### Características Principales

1. **Álbum Digital Vacío**: Al ingresar al sitio, cada usuario obtiene un álbum digital vacío.
2. **Secciones del Álbum**: 
   - Películas (6 láminas)
   - Personajes (82 láminas)
   - Naves (36 láminas)
3. **Categorías de Láminas**: Las láminas se dividen en dos grupos: especiales y regulares. Las primeras 6 películas, los primeros 20 personajes y las primeras 10 naves son consideradas láminas especiales.
4. **Menú de Navegación**: 
   - **Obtener Láminas**: Muestra sobres disponibles para abrir.
   - **Mi Álbum**: Muestra las láminas coleccionadas en cada sección del álbum.
5. **Sobres**: Cada sobre contiene 5 láminas y se puede abrir solo uno a la vez. Los sobres restantes se bloquean por 1 minuto con un contador visible.
6. **Configuración de Sobres**:
   - Configuración 1: 1 película, 3 personajes y 1 nave.
   - Configuración 2: 3 personajes y 2 naves.
7. **Gestión de Láminas**: Cada lámina puede ser añadida al álbum o descartada. Se muestra información detallada sobre cada recurso.
8. **Visualización del Álbum**: En la sección "Mi Álbum", se pueden ver las láminas obtenidas con información detallada y la opción de consultar más datos del API.

## Cómo Ejecutar la Aplicación

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. **Clona el Repositorio**:

   ```bash
   git clone https://github.com/jonathanvrag/testTurinng.git
   cd testturing
   ```

2.  **Instala las Dependencias**:

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

3. **Configura las Variables de Entorno**:

La aplicación requiere algunas variables de entorno para funcionar correctamente. Crea un archivo .env en la raíz del proyecto y agrega las variables que deberas solicitar al correo jonathan.vra@gmail.com:

   ```env
   NEXT_PUBLIC_API_URL='variable de entorno'
   ```

4. **Inicia el Servidor de Desarrollo**:

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

La aplicación estará disponible en http://localhost:3000.

5. **Construye la Aplicación para Producción**:

Si deseas construir una versión optimizada de la aplicación para producción, ejecuta:

   ```bash
   npm run build
   ```

6. **Inicia el Servidor de Producción**:

Después de construir la aplicación, puedes iniciar el servidor en modo producción con:

   ```bash
   npm start
   ```

7. **Verifica el Código con ESLint**:

Para asegurarte de que el código sigue las mejores prácticas, ejecuta:

   ```bash
   npm run lint
   ```

## Información Adicional

- La aplicación está desplegada en [testturing-jonathanvera.netlify.app.](https://testturinng-jonathanvera.netlify.app)

- Este proyecto ha sido desarrollado por Jonathan Vera Gómez como parte de una prueba técnica para la empresa Turinng.
