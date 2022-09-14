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




<!-- 14/09/2022 -->
// const cl = (toPrint:any):any => {
//     console.log(toPrint);
// }; 
// function cl2(asd:any):any{
//     console.log(asd);
// }



// // LISTAS (AGREGAR Y ELIMINAR POR POSICION)

// let lista: string[] = ['Riohacha', 'Jaider', 'Camioneta', 'Jeep'];
// let numeros: number[] = [1,2,3,4,5];

// // console.log(lista)
// // lista[2-1] = 'Sandy'
// console.log('LISTA ANTES:')
// console.log(lista)

// console.log('AGREGANDO AL FINAL')
// lista.push('FINAL');
// console.log(lista)

// console.log('ELIMINANDO AL FINAL')
// lista.pop();
// console.log(lista)

// console.log('AGREGANDO AL INICIO')
// lista.unshift('INICIO');
// console.log(lista)


// console.log('ELIMINANDO AL INICIO')
// lista.shift();
// console.log(lista)


// console.log('ELIMINANO O AGREGANDO POR POSICION EN CONCRETO')
// lista.splice(0,2)
// // lista.splice(0,N)
// // A partir de la posición (0) voy a eliminar N cantidad de elementos
// console.log(lista)


// lista.splice(1,0, 'Bases de datos')
// // lista.splice(0,N)
// // A partir de la posición (1) voy a eliminar 0 cantidad de elementos POR LO QUE NO SE VA A ELIMINAR, SE VA A AGREGAR 'Bases de datos'
// console.log(lista)







// // UNIENDO LISTAS

// let a: string[] = ['1', '2', '3', '4'];
// let b: string[] = ['5', '6', '7', '8'];


// // CONCATENAR VARIAS FORMAS DE HACERLO

// // CONCATENAR a y b reemplazando en a
// a.push.apply(a, b);
// console.log(a);

// // CONCATENAR a y b en un nuevo array
// let nuevoArreglo = a.concat(b)
// console.log(nuevoArreglo)

// // CONCATENAR a y b en un nuevo array con Spread Operator
// let nuevoArreglo2 = [...a, ...b]
// console.log(nuevoArreglo2)



// let dsfgh:Number[] = [1,3,4,6,7,8,9,10]
// cl(dsfgh)
// cl2(dsfgh)






// // FUNCIONES
// // Con Retorno
//     // De forma implicita
//     function add_1(value1:number, value2:number):number{
//         return (value1 + value2)
//     }

//     // De forma explicita
//     function add_2(value1:number, value2:number){
//         return (value1 + value2)
//     }


// // Sin Retorno
//     // De forma implicita
//     function add2_1(value1:number, value2:number):void{
//         value1 + value2
//     }
    
//     // De forma explicita
//     function add2_2(value1:number, value2:number){
//         value1 + value2
//     }


// // FUNCIONES ANONIMAS
// let resultado = function(value1:number, value2:number):number{
//     return (value1 + value2);
// }

// cl(resultado(4,5))
// cl(resultado)



// // PARAMETROS OPCIONALES
// let resulta = function(value1:number, value2?:number):number{
//     if(value2 == undefined){
//         return value1;
//     }
//     return (value1 + value2)
// }

// cl(resulta(4,9))
// cl(resulta(4))



// // PARAMETROS REST
// // let resultado2 = function(...arregloARecibir:string[]):void{
// let resultado3 = function(...arregloARecibir:any[]):void{
//     cl('IMPRIMIENDO TODO EL ARREGLO')
//     console.log(...arregloARecibir)
    
//     cl('IMPRIMIENDO EL ARREGLO UNO A UNO')
//     arregloARecibir.forEach((a) => cl(a))

// }

// let dato1:string = '2sdfghj'
// let dato2:string = '12dgdffg'
// let dato3:string = 'ghhfgfgbfg'
// let dato4:string = 'ntyh657h65h5'
// let dato5:number = 134565465;

// // resultado2(dato1, dato2, dato3, dato4);
// resultado3(dato1, dato2, dato3, dato4, dato5);



// // OVERLOAD
// function addOver(a:string, b:string):string{
//     return (a + b);
// }

// function addOver(a:number, b:number):number{
//     return (a + b);
// }

// function addOver(a:any, b:any):any{
// 	return (a + b);
// }

// cl(addOver(4,5));
// cl(addOver("a","b"));


// // ARROW FUNCTIONS
//     // con ARROW FUNCTIONS
//     let multiplica = (a:number, b:number) => (a * b);
//     cl(multiplica(4,5))

//     // con funciones clasicas
//     function multiplicaClassic(a:number, b:number):number{
//         return (a * b);
//     } 

//     cl(multiplica(4,5))
//     cl(multiplicaClassic(4,5))


// // Ejemplo de uso
// const estudiantes = [
//     {nombre: 'Luis', edad: 23},
//     {nombre: 'Luis', edad: 21},
//     {nombre: 'Luis', edad: 18}
// ]
// console.log(estudiantes.map(edadEst => edadEst.edad))
// console.log(estudiantes.map(function (edadEst){
//         return edadEst.edad;
//     }
// ));





// OBJETOS
// let estudiante = {
//     nombre: 'Jaider Quintero',
//     programa: 'Ing de Sistemas'
// }
// cl(estudiante)


//     // Interfaces
//     interface Person{
//         id: number;
//         name: string;
//         surname: string;
//         birthday: Date;
//     }

//     let person1: Person = {
//         id: 1,
//         name: 'Jaider',
//         surname: 'Quintero',
//         birthday: new Date(1991, 3, 30)
//     };
//     cl(person1)
//     cl(person1.name)



//     // Interfaces con parametros opcionales
//     interface Persona{
//         id: number;
//         name: string;
//         surname: string;
//         birthday?: Date;
//     }

//     const persona1: Persona = {
//         id: 1,
//         name: 'Jaider',
//         surname: 'Quintero'
//     }
//     cl(persona1)




// CLASES
// class PPersona {
//     protected nombre:string;
//     protected edad:number;

//     constructor(nombre:string, edad:number){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     imprimir(){
//         cl(`Nombre: ${this.nombre}`);
//         cl(`Edad: ${this.edad}`);
//     }
// }
// const p1 = new PPersona('Juan', 44);
// p1.imprimir();



// class Empleado extends PPersona {
//     private sueldo:number;

//     constructor(nombre:string, edad:number, sueldo:number){
//         super(nombre, edad);
//         this.sueldo = sueldo;
//     }

//     imprimir(){
//         super.imprimir();
//         cl(`Sueldo: ${this.sueldo}`)
//     }

//     pagaImpuestos(){
//         if(this.sueldo > 5000)  cl(`${this.nombre} debe pagar impuestos`)
//         else    cl(`${this.nombre} no debe pagar impuestos`)
//     }
// }
// const p2 = new Empleado('John', 34, 1800000);
// p2.imprimir();
// p2.pagaImpuestos();