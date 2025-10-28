import { IPersonaRepositoryUseCase } from "@/app/Domain/RepositoriesUseCase/IPersonaRepositoryUseCase";
import { Persona } from "@/app/Domain/Entities/Persona";

export class PersonaListaVM {
  private _listaPersonas: Persona[] = [];
  public loading = false;
  public errorMessage: string | null = null;

  constructor(private personaRepositoryUseCase: IPersonaRepositoryUseCase) {}

  public get ListadoPersonas(): Persona[] {
    return this._listaPersonas;
  }

  public async load(): Promise<void> {
    this.loading = true;
    this.errorMessage = null;
    try {
      // Si el usecase es síncrono se envuelve en Promise.resolve para unificar manejo
      const result = await Promise.resolve(this.personaRepositoryUseCase.getListadoPersonas());
      this._listaPersonas = result ?? [];
    } catch (err: any) {
      // Capturamos cualquier Error genérico y exponemos su mensaje
      this._listaPersonas = [];
      this.errorMessage = err?.message ?? "Error desconocido al cargar personas";
    } finally {
      this.loading = false;
    }
  }

  public async retry(): Promise<void> {
    await this.load();
  }
}
