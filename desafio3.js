class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        return mensagem;
    }
}

// Chamando a classe
const heroi_mago = new Heroi("Gandalf", 1000, "mago");
console.log(heroi_mago.atacar());

const heroi_guerreiro = new Heroi("Conan", 35, "guerreiro");
console.log(heroi_guerreiro.atacar());
