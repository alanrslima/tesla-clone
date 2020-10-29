import { useContext, useEffect, useCallback } from "react";
import ModelsContexts from "./ModelsContexts";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(
    ModelsContexts
  );

  useEffect(() => unregisterModel(modelName), [modelName, unregisterModel]);

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName,
  ]);

  return { registerModel, getModel };
}
