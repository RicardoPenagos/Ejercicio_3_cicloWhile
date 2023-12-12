// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

const $ejercicio1BtnAceptar = document.querySelector('#ejercicio1BtnAceptar');
const $ejercicio1Respuesta = document.querySelector('#ejercicio1Respuesta');

function multiplos5(){
    const $ejercicio1Input1 = Number (document.querySelector('#ejercicio1Input1').value);

    if($ejercicio1Input1 > 0){
        $ejercicio1Respuesta.innerHTML = "";
        let incremento = 1;
        const multiplos = [0];
       
        while(multiplos[multiplos.length-1] <= $ejercicio1Input1){
            multiplos.push(incremento*5);
            
            if(incremento % 20 == 0){
                $ejercicio1Respuesta.innerHTML += `<br>`
            }
            $ejercicio1Respuesta.innerHTML += `${multiplos[incremento-1]}, `;
            incremento ++;
        }
        console.log(multiplos);

    }else{
        $ejercicio1Respuesta.innerHTML = `Tienes que agregar un numero positivo`;
    }
}

$ejercicio1BtnAceptar.addEventListener('click', multiplos5);

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

const $ejercicio2BtnAceptar = document.querySelector('#ejercicio2BtnAceptar');
const $ejercicio2Respuesta = document.querySelector('#ejercicio2Respuesta');

function loteria(){
    const $ejercicio2Input1 = Number (document.querySelector('#ejercicio2Input1').value);
    const $ejercicio2Input2 = Number (document.querySelector('#ejercicio2Input2').value);

    if($ejercicio2Input2 > 0 && $ejercicio2Input1 > 0 && $ejercicio2Input2 <= 50 && $ejercicio2Input1 <= 50) {
        $ejercicio2Respuesta.innerHTML = "";
        let incremento = 1;
        const array = [];
       
        while(incremento <= 50){
            if(incremento === $ejercicio2Input1 || incremento === $ejercicio2Input2){
                array.push("¡Lotería!");
            }else{
                array.push(incremento);
            } 
            
            if(incremento % 11 == 0){
                $ejercicio2Respuesta.innerHTML += `<br>`
            }
            $ejercicio2Respuesta.innerHTML += `${array[incremento-1]}, `;
            incremento ++;
        }
        console.log(array);

    }else{
        $ejercicio2Respuesta.innerHTML = `Tienes que agregar números enteros positivos y menores de 50`;
    }
}

$ejercicio2BtnAceptar.addEventListener('click', loteria);


// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

const $ejercicio3BtnActivar = document.querySelector('#ejercicio3BtnActivar');
const $ejercicio3Respuesta = document.querySelector('#ejercicio3Respuesta');

function arregloInfinito(){
     
    let bandera = true;
    const arrayInfinito = [];
    do{
        const numeroUsuario = prompt("Añade un número, esto no se detendrá hata que pongas un 0");

        if(numeroUsuario == 0 && numeroUsuario != ""  && numeroUsuario.trim().length > 0){
            bandera = false;
            
        }else if(numeroUsuario != "" && numeroUsuario != null && numeroUsuario.trim().length > 0){
            if(!isNaN(numeroUsuario)){
                arrayInfinito.push(numeroUsuario);
                
            }
        }
    }while(bandera);
    $ejercicio3Respuesta.innerHTML = arrayInfinito.length == 0 ? `No agregaste ningún valor` :`El resultado final es: ${arrayInfinito}`;

    console.log(arrayInfinito.length == 0 ? `No agregaste ningún valor` :`El resultado final es: ${arrayInfinito}`);

}

$ejercicio3BtnActivar.addEventListener('click', arregloInfinito);


// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

const $ejercicio4BtnActivar = document.querySelector('#ejercicio4BtnActivar');
const $ejercicio4Respuesta = document.querySelector('#ejercicio4Respuesta');

function arregloInfinitoPalabras(){
     
    let bandera = true;
    const arrayInfinito = [];
    while(bandera){
        const palabraUsuario = prompt("Añade letras o palabras, esto no se detendrá hata que no pongas ningún dato");

        if(palabraUsuario == ""){
            bandera = false;
            
        }else if(palabraUsuario != "" && palabraUsuario != null && isNaN(palabraUsuario)){   
            arrayInfinito.push(palabraUsuario);
                 
        }
    };
    $ejercicio4Respuesta.innerHTML = arrayInfinito.length == 0 ? `No agregaste ningún valor` :`El resultado final es: ${arrayInfinito.join("")}`;

    console.log(arrayInfinito.length == 0 ? `No agregaste ningún valor` :`El resultado final es: ${arrayInfinito.join("")}`);

}

$ejercicio4BtnActivar.addEventListener('click', arregloInfinitoPalabras);


// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

const $ejercicio5BtnActivar = document.querySelector('#ejercicio5BtnActivar');

function randomLunes(){
    const datosLunes = ["El riesgo de ataques al corazón aumenta un 20% durante los lunes.","La mayoría de suicidios ocurren los lunes", "Casi el 50% de los empleados llega tarde al trabajo los lunes.", "Personas de edades comprendidas entre los 45 y 55 años suelen sufrir más el «síndrome de los lunes».", "Curiosamente los lunes son días buenos para comprar un coche ya que muchos concesionarios confeccionan ofertas para comienzos de semana.", "Cambio en los patrones de sueño. Si eres de los que duermes más horas durante los fines de semana puede que el lunes notes esa falta de sueño y te sientas algo peor en tu trabajo o estudios.", "La noche del domingo al lunes es la que menos dormimos.","Los lunes tenemos una peor imagen de nosotros mismos y nos cuesta más socializarnos.", "Nuestros deseos de cambiar de trabajo suelen aflorar durante este día de la semana.", "Menos trabajo. Normalmente los lunes se suele rendir menos en el trabajo. Se calcula que el trabajo productivo durante los lunes se limita a las 3-4 horas.", "Se cree que una buena manera de recuperarse de este tipo de síntomas provocados por el lunes es ver la televisión o tomar chocolate."]

    return datosLunes[Math.floor(Math.random() * datosLunes.length)];
}

function diaDeLaSemana(){
    
   
    let bandera = true;

    while(bandera){

        try{

            const dia = prompt("Agrega un día de la semana, esto no se detendrá hasta que pongas 'domingo'", "lunes").toUpperCase();
        
            switch(dia){

                case "LUNES":
                    alert(randomLunes());
                    break;
                
                case 'MARTES': 
                    alert("Feliz día, estás bien encaminado durante este periodo, tú puedes, pronto terminarás con tu trabajo y estarás libre para divertirte o relajarte");
                    break;
                
                case 'MIERCOLES': case 'MIÉRCOLES':
                    alert("Mensaje personalizado del Miércoles");
                    break;
        
                case "JUEVES":
                    alert("Mensaje personalizado del Jueves");
                    break;
        
                case 'VIERNES':
                    alert("Pues es Viernes, no esperes más de mi.");
                    break;
                
                case 'SÁBADO': case 'SABADO':
                    alert("Genial, es fin de semana, aprovechalo al máximo.");
                    break;
                
                case 'DOMINGO':
                    bandera = false;
                    alert("ve a descansar");
                    break;
                
                default:
                    alert("ESO NO ES VÁLIDO");
                
            }
        } catch(e){}
    }    
}

$ejercicio5BtnActivar.addEventListener("click", diaDeLaSemana);