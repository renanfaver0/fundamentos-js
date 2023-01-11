let lightYear = prompt("Qual a distância anos-luz?");

let optionsCase = prompt("Para qual unidade deseja converter?\n 1 - Parsec(PC)\n 2 - Unidade Astronônima(AU)\n 3 - Quilômetros(KM)\n\n (Digite o número da opção desejada):");

let chosenUnit;
let convertedDistance;


switch(optionsCase) {
    case "1":
        chosenUnit = "Parsec";
        convertedDistance = lightYear * 0.306601;
        break;
    case "2":
        chosenUnit = "Unidade Astronômica";
        convertedDistance = lightYear * 63241.1;
        break;
    case "3":
        chosenUnit = "Quilômetros";
        convertedDistance = lightYear * 9.5 * Math.pow(10, 12);
        break;
        default:
            chosenUnit = "Unidade não identificada";
            convertedDistance = "Conversão não indenticada";
}

alert("Distância em Anos-luz: " + lightYear + "\n" + chosenUnit + ": " + convertedDistance);

