import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { ViewportGrid } from "../ViewportGrid";

test("Renders viewport grid", () => {
  render(<ViewportGrid />);
  screen.queryByTestId("grid")

});


