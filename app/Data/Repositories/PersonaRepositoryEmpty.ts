import { Persona } from "../../Domain/Entities/Persona";
import { IPersonaRepository } from "../../Domain/RepositoriesInterfaces/IPersonaRepository";
import { injectable } from "inversify";

/**
 * Clase del repositorio de Persona
 * @class PersonaRepositoryEmpty
 * @implements {IPersonaRepository}
 */
@injectable()
export class PersonaRepositoryEmpty implements IPersonaRepository {
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
        this._listaPersonas = [];
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