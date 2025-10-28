import { useEffect, useState } from "react";
import { container } from "@/app/Core/container";
import { TYPES } from "@/app/Core/types";
import { Persona } from "@/app/Domain/Entities/Persona";
import { PersonaListaVM } from "@/app/Presentation/ViewModels/PersonaListaVM";

export const usePersonaListaVM = () => {
  const [vm] = useState(() => {
    // resolver en runtime desde el container
    const repoUseCase = container.get<any>(TYPES.IPersonaRepositoryUseCase);
    return new PersonaListaVM(repoUseCase);
  });

  const [, setTick] = useState(0); // for re-render when VM changes
  const forceRender = () => setTick(t => t + 1);

  useEffect(() => {
    (async () => {
      await vm.load();
      forceRender();
    })();
    // reintenta periódicamente por si cambia la ventana horaria
    const interval = setInterval(async () => {
      await vm.load();
      forceRender();
    }, 30_000);
    return () => clearInterval(interval);
  }, [vm]);

  const refresh = async () => {
    await vm.retry();
    forceRender();
  };

  return {
    vm,
    listado: vm.ListadoPersonas as Persona[],
    loading: vm.loading,
    error: vm.errorMessage,
    refresh
  };
};
