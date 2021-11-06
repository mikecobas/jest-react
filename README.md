# platzi-store
Curso de Pruebas unitarias con Jest

```
npm i react-test-renderer@16.14.0 -D

```


- **shallow** nos permite traer elementos y probarlos como una unidad sin traer todo el dom
-  **mount** nos permite montar un componente del dom
-  **create** de react test renderer nos permite crear snapshots de nuestros componentes para validar que la estructura no ha cambiado y se cambia marcarlo como error.
   -  para actualizar un snapshot hay que correr el comando *jest --updateSnapshot*

```
jest --udpateSnapshot 
```
