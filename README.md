# S4.-API

INSTALACIÓN DE TYPSCRIPT:
Paso 1: iniciar el proyecto TypeScript
 Para comenzar su proyecto TypeScript, deberá crear un directorio para su proyecto.
 
 Ahora cambie al directorio de su proyecto:
  cd "nombre del directorio creado"
  
 Con el directorio de su proyecto configurado, puede instalar TypeScript:
  npm i typescript --save-dev
 Es importante incluir la --save-devbandera porque guarda TypeScript como una dependencia de desarrollo. Esto significa que se requiere TypeScript para el desarrollo de su proyecto.

 Con TypeScript instalado, puede inicializar su proyecto TypeScript usando el siguiente comando:
  npx tsc --init
  npmTambién incluye una herramienta llamada npx, que ejecutará paquetes ejecutables. npxnos permite ejecutar paquetes sin tener que instalarlos globalmente.

 El tsc comando se utiliza aquí porque es el compilador TypeScript integrado. Cuando escribe código en TypeScript, ejecutarlo tsctransformará o compilará su código en JavaScript.

El uso de la --init bandera en el comando anterior inicializará su proyecto creando un tsconfig.json archivo en el typescript-project directorio de su proyecto. Este tsconfig.json archivo le permitirá configurar y personalizar aún más cómo tsc interactúan TypeScript
y el compilador. Puede eliminar, agregar y cambiar configuraciones en este archivo para satisfacer mejor sus necesidades.

Abra tsconfig.jsonen su editor para encontrar la configuración predeterminada:

nano tsconfig.json
Habrá muchas opciones, la mayoría de las cuales están comentadas:

proyecto-mecanografiado/tsconfig.json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */
    
    . . .
  }
}
Puede personalizar su configuración de TypeScript a través del tsconfig.jsonarchivo. Por ejemplo, podría considerar descomentar la outDirentrada y configurarla en "./build", lo que colocará todos sus archivos TypeScript compilados en ese directorio.

Con TypeScript instalado y su tsconfig.jsonarchivo en su lugar, ahora puede pasar a codificar su aplicación TypeScript y compilarla.

Nota: El paso 3 a continuación reemplazará muchas de sus configuraciones con valores predeterminados sensatos, pero estos cambios lo ayudarán a comenzar de inmediato.

Paso 2: compilar el proyecto TypeScript
Ahora puede comenzar a codificar su proyecto TypeScript. Abra un nuevo archivo nombrado index.tsen su editor. Escriba el siguiente código TypeScript en index.ts:

proyecto-mecanografiado/index.ts
const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
Con este código TypeScript implementado, su proyecto está listo para ser compilado. Ejecute tscdesde el directorio de su proyecto:

npx tsc
Notará que el index.jsarchivo JavaScript compilado y el index.js.maparchivo de mapa fuente se agregaron a la buildcarpeta si así lo especificó en el tsconfig.jsarchivo.

Abra index.jsy encontrará el siguiente código JavaScript compilado:

proyecto-mecanografiado/build/index.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = 'world';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
Ejecutar el compilador TypeScript cada vez que realiza un cambio puede resultar tedioso. Para solucionar este problema, puede poner el compilador en modo de vigilancia, que volverá a compilar su código cada vez que se realicen cambios.

Puede activar el modo de vigilancia usando el siguiente comando:

npx tsc -w
Ha aprendido cómo funciona el compilador de TypeScript y ahora puede compilar con éxito sus archivos de TypeScript. Puede llevar sus proyectos de TypeScript al siguiente nivel introduciendo un linter en su flujo de trabajo.


Als anteriors lliuraments, les dades que hem utilitzat a les nostres webs els hem agregat nosaltres al programa (hardcoded), però no és habitual.

Com a la majoria de webs reals, consumirem les dades d'una API en aquest exercici. Per sort, no haurem d'implementar una API per a guardar les dades en una base de dades, i poder consumir-los amb una sèrie de crides. En lloc d'això, usarem una API ja feta que ens permetrà obtenir el llistat de naus fàcilment.

Els dos temes més importants que posaràs en pràctica en aquest projecte són TypeScript i obtenció de dades mitjançant anomenades API Rest a un servidor.

Una empresa de coaching està portant un experiment a empreses de Barcelona, en la qual està mesurant l'impacte de l'humor i la diversió a la productivitat.

Ens han demanat una aplicació web que mostri acudits a les persones treballadores abans de començar la jornada laboral.

Seràs l'encarregat/da de dur a terme la base del projecte per a fer una demo en dues setmanes amb el client/a i començar les proves amb usuaris/es reals.

Informació d'API a consumir

Crearem una web d'acudits, consumint dades d'una API gratuïta que no requereix clau. Veuràs que és molt divertit i interessant poder aconseguir dades d'una API, imagina la quantitat de webs que pots fer!

En l'àmbit professional, quan treballis en un projecte, l'empresa normalment té un back end amb una documentació per a poder obtenir les dades. Sovint, una web o app no només té una font de dades, també és comú utilitzar API de tercers. Resumint, saber consumir dades d'una API és una de les skills més importants d'un programador/a front end!



 Important

En qualsevol projecte professional, consumiràs dades d'una API, per la qual cosa has d'entendre bé a fons com realitzar crides API i l'asincronisme de JavaScript.



A continuació es mostren enllaços i informació que poden ser d'utilitat per implementar les crides API a la teva web:

La documentació de l'API a consumir és la següent:
-> Calling the API
Crida per a obtenir un acudit:
-> Random dad joke
Header per a obtenir les dades en el format que ens interessa:
'Accept': 'application/json'
Posem aquest header en l'anomenada API perquè el servidor sàpiga en quin format volem les dades, en el nostre cas en JSON.

Ens hem inventat aquest header? No, ho hem extret de la documentació d'aquesta API

-> Calling the API
Les APIs les crearan programadors de back end, deixant sempre documentat tot perquè els programadors/es de front end o altres programadors/es back end d'altres empreses puguin consumir les dades.

Simplificant, diguem que l'URL de l'API que introduïm en aquest projecte és on consumirem les dades, i el header és com volem les dades.


Notes

A continuació tens les indicacions del responsable front end:

És obligatori implementar tots els bucles i lògica amb ES6 (usant map, reduce, filter i sort per a manipular arrays). En cap cas podràs utilitzar el bucle for.
Hauràs d'implementar el projecte amb Typescript (es demana a gairebé totes les entrevistes).
Si tens dificultats per a crear de zero un projecte TypeScript, aquí tens els passos:
-> Passos per a preparar un projecte TypeScript
Nivell 1
- Exercici 1
En aquest primer exercici crearem la pantalla principal que mostrarà acudits a l'usuari/ària.

El funcionament ha de ser el següent:

- En iniciar es mostrarà el primer acudit per pantalla i el botó de següent acudit.

- En prémer el botó de “Següent acudit” es farà fetch a l'API d'acudits i es mostrarà per consola i per pantalla l'acudit.



Nota: En aquest exercici no és necessari maquetar la web, primer farem que funcioni per a passar a aplicar-li els estils.



 Ajuda

Tip 1: fer servir promises o async/await per a esperar la resposta de l'API.

Tip 2: abans de fer servir una API al codi, és recomanable fer servir Postman per provar l'API. A més de garantir que funciona, veuràs l'objecte que retorna, per saber utilitzar-ho.


- Exercici 2
La nostra web ja obté resposta del servidor i els mostra per consola i pantalla.

Realitza una primera la maquetació, col·locant cada element en el seu lloc. No et preocupis pels detalls, modificarem la maquetació més endavant.

Aquí tens una proposta de col·locació dels elements:





- Exercici 3
L'empresa que encarrega el projecte necessita fer un seguiment de l'ús d'aquesta web per al seu estudi.

Per a això, es necessita saber el nivell d'acceptació dels acudits, un tracking per a saber quan les persones treballadores estan de més bon humor, i quants acudits es consumeixen de mitjana.

Com es tradueix aquesta petició al nostre codi?

Necessitaràs generar un array anomenat reportAcudits, en el qual anirem guardant tota la informació relativa a l'acudit que ens demana el client/a.

Els tres camps que ha de tenir cada objecte de l'array són:

{

 joke: "...",

 score: 1,

 date: ...

}
- La data de quan es va fer la valoració l'hauràs de guardar en format ISO.

- El camp score té un rang de l'1 al 3, sent un 1 la pitjor puntuació. Hauràs d'implementar 3 botons per cada puntuació.

- La votació de l'acudit per part de l'usuari/ària és opcional (es pot passar al següent acudit sense fer cap votació).

- Una vegada l'usuari/ària fa la votació, pot canviar la seva puntuació abans de passar al següent acudit.

- Hauràs d'anar emplenant l'array reportJokes amb les dades obtingudes.

Quan vagis actualitzant aquest array, hauràs de mostrar per consola el seu contingut.

Nivell 2

- Exercici 4
BEN FET! Ja tens una web d'acudits operativa. Ara que la web està pensada per a mostrar acudits a primera hora del matí perquè comencin bé el dia, afegirem informació meteorològica, ja que els pot ser d'utilitat. 
Consumeix una API d'informació meteorològica i mostrar-ho per pantalla a l’inici de l’aplicació.
- Exercici 5

El client/a ens ha comunicat les primeres proves, que els usuaris/àries s'avorriran si sempre es van mostrant el mateix tipus d'acudits.

Has de buscar una altra API (o APIs) d'acudits i utilitzar-la per a alternar acudits de diferents fonts (bé alternant un de cada o de manera aleatòria).

 Ajuda

Els acudits de Chuck Norris mai fallen ;)



Nivell 3
- Exercici 6
Maquetar la web d'acudits i temps meteorològic conforme a la següent pantalla:


Tens molts generadors en línia de gradients, formes, backgrounds… en aquest exemple es recomana usar aquesta eina online per a generar la base del contenidor dels acudits:

-> Blobmaker

Com hauràs pogut observar, en lloc de mostrar a l'usuari/ària el text del temps, el traduïm en una icona i la temperatura actual.

 Ajuda

La forma bàsica del contenidor d'acudits s'ha d'implantar amb SVG.


Bonus: Per a millorar l'experiència d'usuari/ària, pots tenir guardades diverses formes del contenidor (svgs en una carpeta del projecte), i quan es demani un nou acudit, canviar la classe CSS del contenidor. Amb això canviarà la forma (carregant un altre svg), sent superdinàmica i cridanera la web!
