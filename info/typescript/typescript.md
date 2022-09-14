# TYPESCRIPT 

Con typescript defines el tipo de dato 
(Es un lenguaje tipado)
Basicamente, al compilar y ejecutar, lo que vas a ver en la consola del navegador lo verás aquí en la terminal

## (DECLARACION )[JAVASCRIPT vs TYPESCRIPT]
### Variables - Constantes 
```js
DECLARACION
    var edad = 46;
    let nombre = "Jaider Q";
    const ACTIVO = true;


MODIFICACION
    edad = 23;
    nombre = "Quintero"
```




```ts
DECLARACION IMPLICITA
    var edad: number = 46
    let nombre: string = "Jaider Q"
    let arrayDeStrings: string[] = ['a', 'b', 'c']
    const ACTIVO: boolean = true


DECLARACION IMPLICITA (MULTIPLE)
    var edad: (number | string) = 46


DECLARACION EXPLICITA
    var edad = 46
    let nombre = "Jaider Q"
    const ACTIVO = true
    let arrayDeStrings = ['a', 'b', 'c']
    (Lo tomará como el tipo de dato que le asignes, si le pasas el mouse encima lo verás)


MODIFICACION
    edad = 23
    nombre = "Quintero"
```

---


#### Ambito
```
Let
Si la variable está declarada, puedes usarlo en ese conjunto y sus subconjuntos.
Pero sus conjuntos hermanos no podrán acceder a esta variale.
```

```
### Var
Var si permite acceder a la variable desde donde sea, se ubicara en todos los ambitos (como si fuera una variable global)
```

---

### OBJETOS
```ts
let objeto = {
    nombre: 'Jaider Quintero',
    cargo: 'Docente',
    salario: 1500000
}

objeto = {
    nombre: 'Sandy Romero',
    cargo: 'Docente',
    salario: 1500000,
}

Si modificas un valor de una clave, te lo permitirá
En cambio si agregas una nueva clave (con su valor) te marcará error, porque se declaró el objeto con solo 3 claves
```



## CONTROL DE ERRORES
```
try{
    let a = 20;
    let b = -9

    let f = a / Math.sqrt(b)
    console.log(f)
    
} catch (error) {
    console.log('Error)
}



```