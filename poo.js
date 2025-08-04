//Classe Mãe (Abstração)
class Personagem {
    constructor(nome){
        this.nome=nome;
    }

AbstractRange(){
    console.log('${this.nome}está atacando.');
}
}
//Classe filhas (Herança)
class Guerreiro extends Personagem{
    atacar(){
        console.log(`${this.nome} ataca com espada!`);
    }
}
class Mago extends Personagem {
    atacar(){
        console.log(`${this.nome} lança feitiço!`);
    
    }
}
class Bardo extends Personagem {
    atacar(){
        console.log(`${this.nome} toca música!`);
    
    }
}
//Poliforfismo
const personagens =[
    new Guerreiro ("Athur"),
    new Mago ("Merlin"),
    new Bardo ("Fabiano")
];
personagens.forEach(p => p.atacar());