# NODE - TYPESCRIPT


## INSTALAR NODE
nvm, y demas, en la guia está

## INSTALAR TYPESCRIPT
```
npm install -g typescript
tsc --version
```

## UBICAR CARPETA
tsc --init

## MODIFICAR JSON (tsconfig.json)
![json](/json-modificar.PNG)
```
descomentar version
	"target": "es6",                            	
	// "target": "es2016",
	(el puso es6, prueba descomentando la version que trae por defecto)
```
```
descomentar directorios
	"rootDir": "./src",
	"outFile": "./js/app.js",                   
	"outDir": "./js",                           
```
```
comentar (module: commonjs)           
```

## CREAR EN DIRECTORIO
```
src
	app.ts
```


## COMPILAR app.js
```
tsc -w
```

## ABRIR DOS TERMINALES (Ubicate en la ruta de cada uno de los archivos)
```
Uno para compilar 
	tsc -w 		(Dentro de src)	(Compila siempre en automatico) (En la raiz del proyecto (Donde está el config o directamente entrando a la carpeta src))
	tsc 				(Solo, para compilar una vez)
```
```
Otro para ejecutar 
	node js/app.js	(Desde la raiz)
	node app.js	(Dentro de js)
```

```
Debes compilar primero con la otra terminal y luego si ejecutas
O puedes ejecutar (tsc -w) para que se compile automaticamente
```

## CREAR UN INDEX 
Con Script src="app.js"
(Escribiras sobre el app.ts) (Guardarás y automaticamente compilará para el app.js) EZ