import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn docker/i);
  expect(linkElement).toBeInTheDocument();
});
