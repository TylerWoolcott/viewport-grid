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

test("handles onClick", () => {
    const onClick = jest.fn();
    render(<Sidebar setToggleSidebar={onClick} />);
    fireEvent.click(screen.getByTestId("btn-sidebar"));
    expect(onClick).toHaveBeenCalled();
  });

test('renders Sidebar spinbutton and names', () => {
    render(<Sidebar />);
    expect(screen.getByRole('spinbutton', { name: /Rows/i })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton', { name: /Columns/i })).toBeInTheDocument();
    //   debug();
    //   fireEvent.change(screen.getByRole('spinbutton'), {
    //     target: { value: '' },
    //   });
    });


  

