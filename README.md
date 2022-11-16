# Distribucion de Componentes
A modo de guia y tomando de refencia la pantalla al iniciar el proyecto, los componentes se encuentran distribuidos de la siguiente manera:

En la carpeta `container`, se encontrara el archivo general desde donde se realiza el llamado a las dos API´s brindadas para el desafio y al resto de los componentes.

En la carpeta `navbarContainer` se encuentran todos los componentes que van dentro del navbar o bien que se despliegan desde el mismo.

En la carpeta `MoviesContainer` se encuentran dos carpetas, por un lado `featuredMovies`, donde se realiza el llamado a la API que contiene las peliculas destacadas y se realiza un mapeo para obtener sus datos. Por otro lado en la carpeta `popularMovies` se encuentra el dropdown
donde desplegar las opciones "Peliculas Populares" donde realice primeramente un filtrado de las peliculas populares de la API para obtener solo las peliculas que superen la popularidad de 970000, y mapear unicamente 3 (tres) peliculas y no 4 (cuatro) como lo pedia el enunciado ya que las imagenes quedaban demasiado pequeñas y no se visualizaban correctamente.
Finalmente para la opcion "Mis Peliculas" obtuve mediante un evento "onClick" el target del usuario para poder mapear los datos obtenidos de la pelicula que seleccione el usuario y graficarla.

En la carpeta `custom` se encuentran dos archivos muy pequeños en donde uno realiza un listado para las opciones del menu desplegable y otro crea los iconos que se muestran en el navbar.

Por ultimo, en la carpeta `context` se encuentran 3 (tres) contextos creados, lo cual lo decidi asi para mayor orden a la hora de leer el codigo. Existe un contexto para el Menu despegable, otro para el Modal desplegable (desde donde se añaden peliculas) y otro para las opciones que se despliegan al querer añadir una pelicula.

# Librerias utilizadas

Para la estilizacion de mis componentes utilice la libreria [Styled Components](https://styled-components.com/) la cual me parecio la mas practica y rapida para la ocasion.

Y para crear animaciones utilice la libreria [Framer Motion](https://www.framer.com/motion/) la cual con pocas lineas de codigo podia crear simples animaciones.

# Deployment
🎬 [Liteflix Challenge](https://liteflix-fawn.vercel.app/)


