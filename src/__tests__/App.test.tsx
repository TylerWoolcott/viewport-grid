import React from 'react';
import { render, screen } from "@testing-library/react";

import { App } from "../App";

describe('App', () => {
  test('renders App component', () => {
    render(<App />);


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

