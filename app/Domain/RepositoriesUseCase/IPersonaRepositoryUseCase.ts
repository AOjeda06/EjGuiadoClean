import { Persona } from "../Entities/Persona";

/**
 * Interfaz del caso de uso del repositorio de Persona
 * @interface IPersonaRepositoryUseCase
 */
export interface IPersonaRepositoryUseCase {
    /**
     * Obtiene el listado completo de personas
     * @return {Persona[]} Listado completo de personas
     */
    getListadoPersonas(): Persona[];
}