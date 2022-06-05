import React from 'react';
import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // screen.debug(undefined, Infinity)
    // screen.getByRole(''); 
  });
});

test("Renders Columns", () => {
  render(<App />);
  const element = screen.getByText("Columns");
  expect(element).toBeInTheDocument();
});

test("Renders Rows", () => {
  render(<App />);
  const element = screen.getByText("Rows");
  expect(element).toBeInTheDocument();
});

test("Renders grid x text", () => {
  render(<App />);
  const element = screen.getByText(/x/i);
  expect(element).toHaveTextContent(/x/i);
});

