import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "../components/Sidebar";

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

test("handles hamburger button onClick", () => {
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

      test('pass valid row attributes to test input field', async () => {
        render(<Sidebar />);     
        
        const inputEl = screen.getByTestId("row-input");
        expect(inputEl).toHaveAttribute("type", "number");
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    
      })

      const mockedSetRow = jest.fn

      test('should render input row', async () => {
        render(
          <Sidebar 
            row={5} 
            setRow={mockedSetRow}
          />);     
        
        const inputEl = screen.getByText(/Rows/i);
        expect(inputEl).toBeInTheDocument();
      })

      const mockedSetColumn = jest.fn

      test('should render input column', async () => {
        render(
          <Sidebar 
            column={5} 
            setColumn={mockedSetColumn}
          />);     
        
        const inputEl = screen.getByText(/Rows/i);
        expect(inputEl).toBeInTheDocument();
      })

      test('should be able to type in the row input', async () => {
        render(
          <Sidebar 
            row={5} 
            setRow={mockedSetRow}
          />);     
        
        const inputEl = screen.getByTestId("row-input");
        fireEvent.change(inputEl, { target: { value: "5"}})
        expect(inputEl.value).toBe("5");
        expect(inputEl).toBeInTheDocument()
      })

      test('should be able to type in the column input', async () => {
        render(
          <Sidebar 
            column={5} 
            setColumn={mockedSetColumn}
          />);     
        
        const inputEl = screen.getByTestId("column-input");
        fireEvent.change(inputEl, { target: { value: "5"}})
        expect(inputEl.value).toBe("5");
        expect(inputEl).toBeInTheDocument()
      })


  

