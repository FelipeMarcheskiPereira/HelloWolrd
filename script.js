function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario; 
}

const lista = document.querySelector('#lista');

lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 ={
   nome:'Felipe',
   Idade:'17',
   anoletivo:'Ensino Medio'
   materiasfavoritas: ['Fisica','Matemática','programação']
}
console.log(aluno1.nome