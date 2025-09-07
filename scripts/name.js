let name = window.prompt("Qual é o seu nome?"); /* eu sei que voce esta lendo isso... */


if (name && name.toLowerCase() === "gamer") {
    window.location.href = "./eggs/gamer.html"; /* daqui para baixo tudo easter egg doido! */
} else if (name && name.toLowerCase() === "aula05") {
    window.location.href = "https://www.youtube.com/watch?v=Eqypnw6gQNg";
} else if (name && name.toLowerCase() === "173") {
    window.location.href = "https://www.youtube.com/watch?v=CGYuUc9pPtQ";
} else if (name && name.toLowerCase() === "manoel_or_manel") { /* EU NÃO SOU UM DESTRUIDOR DE RAM!!!!!!! */
    window.location.href = "https://github.com/OCOYE";
} else if (name && name.toLowerCase() === "debug") {
    window.location.href = "./eggs/batata.html";
} else if (name && name.toLowerCase() === "updates") {
    window.location.href = "./updates.html";
} else {
    document.writeln(`${name}!`) /* isso não é um easter egg!!*/
}
