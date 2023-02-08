export class About{
    codigo: number;
    pgparou: number;
    prparou: number;
    obs:string;

    constructor(codigo:number = 0,
        pgparou: number = 0,
        prparou: number = 0,
        obs:string = ""){
            this.codigo=codigo;
            this.pgparou=pgparou;
            this.prparou=prparou;
            this.obs=obs;

    }
}