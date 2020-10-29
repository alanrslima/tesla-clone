import React, { useRef, useState, useCallback } from "react";
import ModelsContexts, { CarModel } from "../ModelsContexts";
import { Container, OverlaysRoot } from "./styles";
import ModelOverlay from "../ModelOverlay";

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((model) => model.modelName === modelName) || null
      );
    },
    [registeredModels]
  );

  return (
    <ModelsContexts.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
      ;
    </ModelsContexts.Provider>
  );
};

export default ModelsWrapper;
