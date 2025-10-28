import { Persona } from "../../Domain/Entities/Persona";
import { IPersonaRepository } from "../../Domain/RepositoriesInterfaces/IPersonaRepository";
import { injectable } from "inversify";

/**
 * Clase del repositorio de Persona
 * @class PersonaRepository
 * @implements {IPersonaRepository}
 */
@injectable()
export class PersonaRepository implements IPersonaRepository {
//#region Atributos
    /**
     * Listado de personas
     * @type {Persona[]}
     */
    private _listaPersonas: Persona[];
//#endregion

//#region Constructor

    /**
     * Constructor de la clase PersonaRepository
     */
    constructor() {
        this._listaPersonas = [
            new Persona(1, "Andrés",  "Ojeda", new Date("1990-01-01")),
            new Persona(2, "María",   "González", new Date("1985-05-15")),
            new Persona(3, "Juan",    "Pérez", new Date("2000-12-20")),
            new Persona(4, "Laura",   "Martínez", new Date("1995-07-30")),
            new Persona(5, "Carlos",  "Sánchez", new Date("1988-03-10")),
            new Persona(6, "Ana",     "López", new Date("1992-11-25")),
            new Persona(7, "Luis",    "Ramírez", new Date("1978-09-05")),
            new Persona(8, "Sofía",   "Torres", new Date("2003-04-18")),
            new Persona(9, "Miguel",  "Flores", new Date("1983-06-22")),
            new Persona(10, "Elena",  "Rivera", new Date("1998-08-14"))
        ];
    }
//#endregion

//#region Métodos Públicos
    /**
     * Obtiene el listado completo de personas
     * @returns Listado de personas
     */
    public getListadoCPersonas(): Persona[] {
        return this._listaPersonas;
    }
//#endregion
}