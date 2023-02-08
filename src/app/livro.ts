export class Livro{
    codigo: number;
    nome:string;
    pin:number;

    constructor(codigo:number = 0,
        nome:string = "", pin:number = 0){
            this.codigo=codigo;
            this.nome=nome;
            this.pin=pin;
    }
}