export class Game {
    private _nom: string;
    private _categorie: string;
    private _description: string;
    private _console: string;
    private _id: number;


    constructor(nom: string, categorie: string, description: string, console: string) {
        this._nom = nom;
        this._categorie = categorie;
        this._description = description;
        this._console = console;
    }


    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get categorie(): string {
        return this._categorie;
    }

    set categorie(value: string) {
        this._categorie = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get console(): string {
        return this._console;
    }

    set console(value: string) {
        this._console = value;
    }


    get id(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
        return this;
    }
}
