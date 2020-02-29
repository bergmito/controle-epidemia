export class Infectado {
    nome: string;
    doenca: string;
    idade: number;
    localizacao: Location;
}

export interface Location {
    lat: string;
    long: string;
}