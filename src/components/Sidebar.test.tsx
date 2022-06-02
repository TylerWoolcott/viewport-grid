import React from 'react';
import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

test("Renders Columns", () => {
  render(<Sidebar />);
  const element = screen.getByText("Columns");
  expect(element).toBeInTheDocument();
  const labelElement = screen.getByRole("contentinfo");
  expect(labelElement).toHaveTextContent("Columns");
  expect(labelElement).toHaveAttribute("role", "contentinfo");

});

test("Renders Rows", () => {
  render(<Sidebar />);
  const element = screen.getByText("Rows");
  expect(element).toBeInTheDocument();
  const labelElement = screen.getByRole("row");
  expect(labelElement).toHaveTextContent("Rows");
  expect(labelElement).toHaveAttribute("role", "row");
});

