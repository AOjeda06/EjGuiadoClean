// app/Core/container.ts
import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IPersonaRepository } from "@/app/Domain/RepositoriesInterfaces/IPersonaRepository";
import { PersonaRepository } from "@/app/Data/Repositories/PersonaRepository";
import { PersonaRepositoryEmpty } from "@/app/Data/Repositories/PersonaRepositoryEmpty";
import { IPersonaRepositoryUseCase } from "@/app/Domain/RepositoriesUseCase/IPersonaRepositoryUseCase";
import { PersonaRepositoryUseCase } from "@/app/Domain/UseCase/PersonaRepositoryUseCase";

const container = new Container();

container.bind<IPersonaRepository>(TYPES.IPersonaRepository).to(PersonaRepository).inSingletonScope();
container.bind<IPersonaRepositoryUseCase>(TYPES.IPersonaRepositoryUseCase).to(PersonaRepositoryUseCase).inSingletonScope();

export { container };
