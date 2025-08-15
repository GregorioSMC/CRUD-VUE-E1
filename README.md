# Solucion propuesta para Ejercicio 1: CRUD en Vue 3 con Simulación de Persistencia vía Vuex

* Para correr el proyecto es necesario descomprimir la carpeta node_modules

La solucion consiste en una pantalla de listado donde se muestran todos los clientes disponibles, se implementa un boton para agregar nuevos clientes, la pagina solo muestra 5 registros por pestaña para evitar la saturación de información  

<img width="921" height="497" alt="image" src="https://github.com/user-attachments/assets/861a5a56-0029-4d17-a812-f8be2ebed7db" />

cada registro tendra disponible la opcion de editar y eliminar registros de forma independiente

<img width="921" height="496" alt="image" src="https://github.com/user-attachments/assets/d1748132-9cfc-410f-94f2-958f364924b2" />

En el caso de la eliminacion de registros se debera confirmar en un componente emergente si realmente se desea realizar la acción

<img width="921" height="501" alt="image" src="https://github.com/user-attachments/assets/d90486d9-8f34-4690-8c53-765066ac9162" />

para los casos de agregar y actualizar se utilizara el mismo componente (Formulario para realizar la acción)

<img width="921" height="496" alt="image" src="https://github.com/user-attachments/assets/0c376151-c67a-4b3e-b1a0-58c3b13bea2d" />

Todos los campos son obligatorios en caso de no ingresar informacion la interfaz alertara al usuario

<img width="921" height="494" alt="image" src="https://github.com/user-attachments/assets/95e0000e-74f9-4ba4-9c31-727faeff2085" />

en caso de que la informacion este incompleta o no cumple el formato correcto no sera posible continuar con la actualización o creacion del registro

<img width="921" height="495" alt="image" src="https://github.com/user-attachments/assets/490a0837-37b4-49f1-9768-33c1eacb5fa3" />

Para los casos particulares de Correo electronico y numero telefonico se validara que cumplan con el formato correcto, en caso de no hacerlo no sera posible continuar con la actualizacion o creacion del registro

<img width="921" height="503" alt="image" src="https://github.com/user-attachments/assets/18692503-43c8-4832-91d0-c505ce2c12fc" />
<img width="921" height="494" alt="image" src="https://github.com/user-attachments/assets/f30df4c3-c1e7-4085-ab0f-1b03d9f64866" />

finalmente se para la creacion del proyecto se asigno la siguiente estructura

<img width="295" height="581" alt="image" src="https://github.com/user-attachments/assets/ceb92fd9-90b5-4f04-ba07-9e7a1839108d" />
