import { test, expect } from 'vitest';
import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test("renders three NavLinks", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  
  const homeLink = screen.getByText("Home");
  const directorsLink = screen.getByText("Directors");
  const actorsLink = screen.getByText("Actors");
  
  expect(homeLink).toBeInTheDocument();
  expect(directorsLink).toBeInTheDocument();
  expect(actorsLink).toBeInTheDocument();
});