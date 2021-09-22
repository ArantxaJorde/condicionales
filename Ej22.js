let edad = parseInt(window.prompt("Que edad tienes"));
let carnet;
switch (edad){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:

            window.alert("lo siento no puedes alquilar");
            break;
    default:
            if (carnet= "no") {window.alert (" No puedes alquilar");} 
            else {
                let nombre = window.prompt ("Dame tu nombre");
                let apellido = window.prompt ("Dame tu apellido")
                let ciudad = window.prompt ("donde recoges el vehiculo?");
                let dia = window.prompt("cuantos dias alquilas ");
                if (dia=>7) {
                    window.prompt(`${nombre} ${apellido} recogeras el coche en ${ciudad} con un coste de ${dia/7*150}`);}
                else {window.prompt(`${nombre} ${apellido} recogeras el coche en ${ciudad} con un coste de ${dia*25}`);}
            }
            break; }
