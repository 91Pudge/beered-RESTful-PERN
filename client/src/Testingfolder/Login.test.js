import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Login from "../pages/Login.jsx";

//Username testing
it("email input should render", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

it("email input should be empty", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl.value).toBe("");
});
///
it("email input should change", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  const testValue = "test";
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
});

//Password testing
it("Password input should render", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

it("Password input should be empty", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

it("Password input should change", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

//Button testing
it("Button input should be render", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

it("Button clicked", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const buttonEl = screen.getByRole("button");
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const emailInputEl = screen.getByPlaceholderText(/email/i);

  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.change(emailInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

it("should render a Link, checks for href attribute.", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const buttonAsLink = screen.getByText("Register", { name: /register/i });
  expect(buttonAsLink).toHaveAttribute("href", "/register");
});
