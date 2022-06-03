import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "../components/Sidebar";
import userEvent from '@testing-library/user-event';

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

test("handles onClick", () => {
    const onClick = jest.fn();
    render(<Sidebar setToggleSidebar={onClick} />);
    fireEvent.click(screen.getByTestId("btn-sidebar"));
    expect(onClick).toHaveBeenCalled();
  });

test('render Sidebar row input', () => {
    render(<Sidebar />);

    const inputEl = screen.getByTestId("row-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
    expect(inputEl).toHaveAttribute("min", "1");
    expect(inputEl).toHaveAttribute("max", "10");
    expect(inputEl).toHaveValue(null);
    });

    test('render Sidebar column input', () => {
      render(<Sidebar />);
  
      const inputEl = screen.getByTestId("column-input");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "number");
      expect(inputEl).toHaveAttribute("min", "1");
      expect(inputEl).toHaveAttribute("max", "10");
      expect(inputEl).toHaveValue(null);
      });

      test('pass valid row number to test input field', () => {
        render(<Sidebar />);     
        
        const inputEl = screen.getByTestId("row-input");
        expect(inputEl).toHaveAttribute("type", "number");
        // userEvent.type(inputEl, "5");

        // expect(screen.getByTestId("row-input")).toHaveValue("5");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    
      })


  

