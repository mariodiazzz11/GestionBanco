<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen Cliente</title>
    <style>
        html {
            background-color: rgb(211, 211, 113);
        }

        .nombre {
            margin-top: 420px;
            text-align: center;
        }

        .nombre h1 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }

        .nombre h2 {
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }

        .pie a {
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }

        .pie {
            background-color: rgb(161, 161, 91);
            margin-top: 144px;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>

<body>
    <!--HTML-->
    <div class="nombre">
        <h1>BANCO MARIO</h1>
        <h2>Tu banco de confianza</h2>
        <h3>Todos los dias de 9:00 a 21.00</h3>
    </div>
    <footer class="pie">
        <a ref="contacto">Correo: mariobanco@madrid.com | Teléfono: +34 612 345 678</a>
        <br>
        <a ref="rrss">Facebook: mariobanco123 | Instagram: @mariobanco</a>
    </footer>

    <script>
        /*Los errores están controlados, pero si intento meter un valor 
        como "500asdd", lo cogerá como bueno y únicamente guarda "500"*/
        let saldoCuenta1 = 0;
        let saldoCuenta2 = 0;
        do {
            saldoCuenta1 = parseFloat(prompt("Introduce el saldo de la cuenta 1:"));
            if (isNaN(saldoCuenta1) || saldoCuenta1 <= 0) {
                alert("Saldo no válido")
            }
        } while (isNaN(saldoCuenta1) || saldoCuenta1 <= 0);
        do {
            saldoCuenta2 = parseFloat(prompt("Introduce el saldo de la cuenta 2:"));
            if (isNaN(saldoCuenta2) || saldoCuenta2 <= 0) {
                alert("Saldo no válido")
            }
        } while (isNaN(saldoCuenta2) || saldoCuenta2 <= 0);

        //Declaración de variables que voy a usar
        let historialCuenta1 = "";
        let historialCuenta2 = "";
        let cuenta = 0;
        let cantidadDepositar = 0;
        let cantidadRetirar = 0;
        let opcionHistorial = 0;
        let opcionTransferir = 0;
        let cantidadTransferir = 0;
        let opcionMenu = "";

        //FUNCION PARA CONSULTAR SALDO
        function consultarSaldo() {
            alert("SALDO ACTUAL:\nCuenta 1: " + saldoCuenta1 + "€\nCuenta 2: " + saldoCuenta2 + "€");
        }

        //FUNCION PARA DEPOSITAR DINERO
        function depositarDinero() {
            do {
                cuenta = parseInt(prompt("Selecciona la cuenta para depositar:\n1- CUENTA 1\n2- CUENTA 2"));
                if (cuenta !== 1 & cuenta !== 2) {
                    alert("Opción no válida");
                }
            } while (cuenta !== 1 & cuenta !== 2);
            if (cuenta === 1) {
                do {
                    cantidadDepositar = parseFloat(prompt("Cantidad a deopsitar en CUENTA 1:"));
                    if (isNaN(cantidadDepositar) || cantidadDepositar <= 0) {
                        alert("Introduce una cantidad válida");
                    }
                } while (isNaN(cantidadDepositar) || cantidadDepositar <= 0);
                saldoCuenta1 = saldoCuenta1 + cantidadDepositar;
                alert("Has depositado " + cantidadDepositar + "€ en CUENTA 1.");
                historialCuenta1 = historialCuenta1 + "Has depositado " + cantidadDepositar + "€.\n";
            } else {
                do {
                    cantidadDepositar = parseFloat(prompt("Cantidad a deopsitar en CUENTA 2:"));
                    if (isNaN(cantidadDepositar) || cantidadDepositar <= 0) {
                        alert("Introduce una cantidad válida");
                    }
                } while (isNaN(cantidadDepositar) || cantidadDepositar <= 0);
                saldoCuenta2 = saldoCuenta2 + cantidadDepositar;
                alert("Has depositado " + cantidadDepositar + "€ en CUENTA 2.");
                historialCuenta2 = historialCuenta2 + "Has depositado " + cantidadDepositar + "€.\n";
            }
        }

        //FUNCION PARA RETIRAR DINERO
        function retirarDinero() {
            do {
                cuenta = parseInt(prompt("Selecciona la cuenta para retirar dinero:\n1- CUENTA 1\n2- CUENTA 2"));
                if (cuenta !== 1 & cuenta !== 2) {
                    alert("Opción no válida");
                }
            } while (cuenta !== 1 & cuenta !== 2);
            if (cuenta === 1) {
                do {
                    cantidadRetirar = parseFloat(prompt("Introduce la cantidad a retirar en CUENTA 1:"));
                    if (isNaN(cantidadRetirar) || cantidadRetirar <= 0) {
                        alert("Introduce una cantidad válida");
                    }
                } while (isNaN(cantidadRetirar) || cantidadRetirar <= 0);
                if (cantidadRetirar > saldoCuenta1) {
                    alert("No tienes saldo suficiente");
                } else {
                    saldoCuenta1 = saldoCuenta1 - cantidadRetirar;
                    alert("Has retirado " + cantidadRetirar + "€ en CUENTA 1.");
                    historialCuenta1 = historialCuenta1 + "Has retirado " + cantidadRetirar + "€.\n";
                }
            } else {
                do {
                    cantidadRetirar = parseFloat(prompt("Introduce la cantidad a retirar en CUENTA 2:"));
                    if (isNaN(cantidadRetirar) || cantidadRetirar <= 0) {
                        alert("Introduce una cantidad válida");
                    }
                } while (isNaN(cantidadRetirar) || cantidadRetirar <= 0);
                if (cantidadRetirar > saldoCuenta1) {
                    alert("No tienes saldo suficiente");
                } else {
                    saldoCuenta2 = saldoCuenta2 - cantidadRetirar;
                    alert("Has retirado " + cantidadRetirar + "€ en CUENTA 1.");
                    historialCuenta2 = historialCuenta2 + "Has retirado " + cantidadRetirar + "€.\n";
                }
            }
        }

        //FUNCION PARA VER EL HISTORIAL
        function historial() {
            do {
                opcionHistorial = parseInt(prompt("HISTORIAL:\n1- CUENTA 1\n2- CUENTA 2"));
                if (opcionHistorial !== 1 && opcionHistorial !== 2) {
                    alert("Opción no válida");
                }
            } while (opcionHistorial !== 1 && opcionHistorial !== 2);
            if (opcionHistorial === 1) {
                alert("HISTORIAL CUENTA 1:\n" + historialCuenta1);
            } else {
                alert("HISTORIAL CUENTA 2:\n" + historialCuenta2);
            }
        }

        //FUNCION PARA TRANFERIR DINERO
        function transferirDinero() {
            do {
                opcionTransferir = parseInt(prompt("TRANSFERIR DINERO:\n1- DE CUENTA 1 A CUENTA 2\n2- DE CUENTA 2 A CUENTA 1"));
                if (opcionTransferir !== 1 && opcionTransferir !== 2) {
                    alert("Opción no válida");
                }
            } while (opcionTransferir !== 1 && opcionTransferir !== 2);
            if (opcionTransferir === 1) {
                do {
                    cantidadTransferir = parseFloat(prompt("CANTIDAD A TRANSFERIR DE CUENTA 1 A CUENTA 2:"));
                    if (isNaN(cantidadTransferir) || cantidadTransferir <= 0) {
                        alert("Valor no válido");
                    }
                } while (isNaN(cantidadTransferir) || cantidadTransferir <= 0);
                if (saldoCuenta1 < cantidadTransferir) {
                    alert("Saldo insuficiente");
                } else {
                    saldoCuenta1 = saldoCuenta1 - cantidadTransferir;
                    saldoCuenta2 = saldoCuenta2 + cantidadTransferir;
                    alert("Has transferido " + cantidadTransferir + "€ a CUENTA 2");
                    historialCuenta1 = historialCuenta1 + "Has transferido " + cantidadTransferir + "€ a CUENTA 2\n";
                    historialCuenta2 = historialCuenta2 + "Has recibido una transferencia de " + cantidadTransferir + "€ desde CUENTA 1\n";
                }
            } else {
                do {
                    cantidadTransferir = parseFloat(prompt("CANTIDAD A TRANSFERIR DE CUENTA 2 A CUENTA 1:"));
                    if (isNaN(cantidadTransferir) || cantidadTransferir <= 0) {
                        alert("Valor no válido");
                    }
                } while (isNaN(cantidadTransferir) || cantidadTransferir <= 0)
                if (saldoCuenta2 < cantidadTransferir) {
                    alert("Saldo insuficiente");
                } else {
                    saldoCuenta2 = saldoCuenta2 - cantidadTransferir;
                    saldoCuenta1 = saldoCuenta1 + cantidadTransferir;
                    alert("Has transferido " + cantidadTransferir + "€ a CUENTA 1");
                    historialCuenta2 = historialCuenta2 + "Has transferido " + cantidadTransferir + "€ a CUENTA 1\n";
                    historialCuenta1 = historialCuenta1 + "Has recibido una transferencia de " + cantidadTransferir + "€ desde CUENTA 2\n";
                }
            }
        }

        //FUNCION PARA MOSTRAR EL MENÚ
        function menu() {
            opcionMenu = prompt("MENÚ PRINCIPAL:\nA- CONSULTAR SALDO\nB- DEPOSITAR DINERO\nC- RETIRAR DINERO\nD- VER HISTORIAL\nE- TRANSFERIR DINERO\nS- SALIR");
            switch (opcionMenu) {
                case "A":
                    consultarSaldo();
                    break;
                case "B":
                    depositarDinero();
                    break;
                case "C":
                    retirarDinero();
                    break;
                case "D":
                    historial();
                    break;
                case "E":
                    transferirDinero();
                    break;
                case "S":
                    alert("Has salido");
                    break;
                case "a":
                    consultarSaldo();
                    break;
                case "b":
                    depositarDinero();
                    break;
                case "c":
                    retirarDinero();
                    break;
                case "d":
                    historial();
                    break;
                case "e":
                    transferirDinero();
                    break;
                case "s":
                    alert("Has salido");
                    break;
                default:
                    alert("Opción no válida");
            }
        }
    </script>
    <script>
        //EJECUTO EL MENU (TODO EL PROGRAMA CASI)
        do {
            menu();
        } while (opcionMenu !== "S" && opcionMenu !== "s");
    </script>
</body>

</html>

//Espero que te guste mi proyecto
