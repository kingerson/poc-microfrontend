"use client";

import { Provider } from "react-redux";
import { reduxStore } from ".";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(reduxStore);

export function ProviderStore({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
