let nameNave = prompt("Qual o nome da nave?");

let confirmEnterShip = ""

let dobras = 0;

confirmEnterShip = prompt("Deseja entrar em dobra espacial? \n\n 1 - Sim \n 2 - Não");

while(confirmEnterShip == "1") {
    dobras += 1;
    confirmEnterShip =  prompt("Deseja realizar a próxima dobra? \n\n 1 - Sim \n 2 - Não");
}

alert("O Nome da nave é: " + nameNave +  "\n Quatidade de dobras: " + dobras); 