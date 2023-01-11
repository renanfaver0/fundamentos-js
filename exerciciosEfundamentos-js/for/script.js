let nameSpaceship = prompt("Qual o nome você deseja para a nave?");
let replaceCharacter = prompt("Qual caractere você deseja substituir?");
let newReplaceCharacter = prompt("Por qual caractere você deseja substituir?");
let newNameSpaceship = '';

for(let i = 0; i < nameSpaceship.length; i++){
    if(nameSpaceship[i] == replaceCharacter) {
        newNameSpaceship += newReplaceCharacter
    }else {
        newNameSpaceship += nameSpaceship[i];
    }
}

alert("O nome da nave é: " + newNameSpaceship);