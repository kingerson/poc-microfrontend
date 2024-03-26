import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ProviderStore } from "../store/provider";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ProviderStore>{children}</ProviderStore>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render, userEvent };
