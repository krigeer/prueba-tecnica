# prueba-tecnica

## Intsalaciones:
Vuetify:
    npm install vuetify@3
    npm install vuetify@next sass @mdi/font



######    Diccionario de nombres:
● Nombre proyecto:
    SPA (debido a que sera una verción pequela de SPA se asigno este nombre)

● Fet:
    Es el footer de la pagina

● Header:
    Es el encabezado azul donde sale la palabra BRM

● UserList:
    Lista de usuario donde se consume la appi y se llama al componente userModal

● UserModal:
    Modal con la informacion faltante (la que no se muestra en user list, este modal usa props como en react )

● SearchBar:
  Barra de busqueda (esta tiene el input para realizar la busqueda por el nombre)

# Logica de diseño:
  Realice un diseño sencillo y agradable, implemente el scrooll de vuetify en la vista de usuarios ya que me parecio mas interactivo hacerlo tipo scrooll
  ya que de esta manera no se tiene que bajar tanto la pagina sino que en un pequeño container o una pequeña hoja (v-sheet) se podria almacenar todo y con
  la busqueda se podra visualizar, pense que al ser una pagina corta y con la información clara seria mas facil de usar, los colores blancos y azul son debido a que BRM los usa como colores base y el negro del footer lo use para destacar el final de la pagina

# Logica de funcionamiento
 principalmente realice la peticion de la api la cual almacene en service/api.js, normalmente la llamada de estas apis cuando se va a usar en varios modales yo las dejo separadas de los componente bajo una funcion que pueda exportar para despues simplemente llamarla, tambien cabe aclarar de que es la primera vez que llamo la carpeta que contiene la api como services ya que normalmente la llamo como store, la llamda de la api la realice con una funcion usando fetch y try para el manejo de errores en la llamada o consumo

 Despues de tener la peticion de la api pase a realizar el diseño en UserList donde este diseño llama la api como UserData ya que asi llame la funcion,
 tambien use v-for lo cual hace que mientras la api contenga usuario se hara un scrooll infinito mostrando los usuarios, de lo contrario se mostrara un
 circulo de carga, pienso que el podria mejorarlo añadiendo un tiempo limite de carga donde basado un tiempo este muestre un mensaje por si no logra encontrar informacion ya que al no tener el contador de tiempo este siempre queda cargando

 Despues pase al modal, al usuario dar al boton de ver mas este activa una funcion a la cual le pasa el ID del usuario junto con la información faltante por medio de props como objetos, lo realice de esta manera ya que he trabajado mas con react (lo basico ) y lo he hecho mas de esta manera, el modal cuenta con dos funciones la primera recive la información al activarse y la segunda es desactivacion del modal, la desactivacion lo realice con la intencion de ahorros de recursos 

 por ultimo la barra de busqueda (SearchBar) es un componente el cual usa search query para realizar la busqueda con caracteres string ingresados por el usuario, en este componente tambien se consume la api, la llame y al usuario ingresar un dato inmediatamente empieza a buscar ya que contiene un metodo computed el cual actualiza en tiempo real

 para el footer implemente uno que tengo entre los proyectos que he realizado pero ya despues pense mas en simplificarlo para que tenga una apriencia mas sencilla y agradable

 en App.vue implemente un div.wrapper esto lo realice con el fin de siempre tener el heiht completo de la pantalla y mantener el footer al final








# Mi experiencia programando el SPA y el porque me postule
 Normalmente estoy aconstumbrado ha realizar mas back ya que domino python y django, pero tambien me gusta mucho el front y deseo seguir aprendiendo y mejorandolo, me gusto volver a trabajar con  vue ya que normalmente mis proyectos los he trabajado con DJANGO y DJANGO-REST o codigo vanilla usando php, el ejercicio me fue facil con la creación de componentes y estructuración de encarpetado ya que como tambien he trabajado con React la diferencia no es mucha, 




# Despliegue (Github pages)
primero ejecute el comando (npm run build), esto lo realice para que Vue construya una version con html y js para que sea mas facil de reconocer por Git-Pages esto queda en la carpeta dist

despues añado un commit como deploy (despliegue) lo hice por separado para evitar errores, paraesto use elcomando (git add dist && commit -"deploy")


# despliegue en vercel
https://prueba-tecnica-kappa-six.vercel.app/

