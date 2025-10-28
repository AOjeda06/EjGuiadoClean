import { Persona } from "../Entities/Persona";

/**
 * Interfaz del repositorio de Persona
 * @interface IPersonaRepository
 */
export interface IPersonaRepository {
    /**
     * Obtiene el listado completo de personas
     * @return {Persona[]} Listado completo de personas
     */
    getListadoCPersonas(): Persona[];
}