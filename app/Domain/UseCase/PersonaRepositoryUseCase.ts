import { IPersonaRepositoryUseCase } from "@/app/Domain/RepositoriesUseCase/IPersonaRepositoryUseCase";
import { Persona } from "@/app/Domain/Entities/Persona";
import { IPersonaRepository } from "@/app/Domain/RepositoriesInterfaces/IPersonaRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/app/Core/types";

/**
 * Implementación del caso de uso para el repositorio de personas
 */
@injectable()
export class PersonaRepositoryUseCase implements IPersonaRepositoryUseCase {
    /**
     * Repositorio de personas
     * @type {IPersonaRepository} Repositorio de personas
     */
    private _personaRepository: IPersonaRepository;

    /**
     * Constructor de la clase PersonaRepositoryUseCase
     * @param personaRepository Repositorio de personas
     */
    constructor(@inject(TYPES.IPersonaRepository) personaRepository: IPersonaRepository) {
        this._personaRepository = personaRepository;
    }

    /**
     * Obtiene el listado de personas
     * @returns Listado de personas
     */
    public getListadoPersonas(): Persona[] {
        if (this.comprobarHora()) {
        return this._personaRepository.getListadoCPersonas();
        }
        else {
            throw new Error("Operación no permitida en este horario");
        }
    }

    /**
     * Comprueba la hora actual para permitir o denegar la operación
     * @throws Error si la operación no está permitida en el horario especificado
     * @returns Boolean indicando si la hora es permitida
     */
    private comprobarHora(): Boolean {
        var horaPermitida : Boolean = true;
        const horaActual = new Date();
        const horas = horaActual.getHours();
        const minutos = horaActual.getMinutes();
        if (horas === 13 && minutos >= 20 && minutos < 39) {
            horaPermitida = false;
        }
        return horaPermitida;
    }
}
