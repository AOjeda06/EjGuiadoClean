/**
 * Clase que representa una persona en el sistema
 */
export class Persona {
//#region Attributes
    /**
     * Identificador único de la persona
     * @type {number}
     */
    private _id: number;

    /**
     * Nombre de la persona
     * @type {string}
     */
    private _nombre: string;

    /** 
     * Apellido de la persona
     * @type {string}
     */
    private _apellido: string;

    /**
     * Fecha de nacimiento de la persona
     * @type {Date}
     */
    private _fechaNacimiento: Date;
//#endregion

//#region Constructor
    /**
     * Crea una nueva instancia de la clase Persona
     * @param id Identificador único de la persona 
     * @param nombre Nombre de la persona
     * @param apellido Apellido de la persona
     * @param fechaNacimiento Fecha de nacimiento de la persona
     */
    constructor(id: number, nombre: string, apellido: string, fechaNacimiento: Date) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNacimiento = fechaNacimiento;
    }
//#endregion

//#region Getters & Setters

    /**
     * Obtiene el identificador único de la persona
     * @return {number} Identificador único de la persona
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Obtiene el nombre de la persona
     * @return {string} Nombre de la persona
     */
    public get nombre(): string {
        return this._nombre;
    }

    /**
     * Obtiene el apellido de la persona
     * @return {number} Apellido de la persona
     */
    public get apellido(): string {
        return this._apellido;
    }

    /**
     * Obtiene la fecha de nacimiento de la persona
     * @return {Date} Fecha de nacimiento de la persona
     */
    public get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    /**
     * Establece el nombre de la persona
     * @param value Nuevo nombre de la persona
     */
    public set nombre(value: string) {
        this._nombre = value;
    }

    /**
     * Establece el apellido de la persona
     * @param value Nuevo apellido de la persona
     */
    public set apellido(value: string) {
        this._apellido = value;
    }

    /**
     * Establece la fecha de nacimiento de la persona
     * @param value Nueva fecha de nacimiento de la persona
     */
    public set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }
//#endregion
}

export default Persona;