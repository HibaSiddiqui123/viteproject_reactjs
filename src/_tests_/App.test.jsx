import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("renders", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Check your eligibility/ineligibility criteria")
    ).toBeDefined();

    const linkAnchorElement = screen.getByText("Criteria Assessment");
    expect(linkAnchorElement).toBeInstanceOf(HTMLAnchorElement);

    fireEvent.click(linkAnchorElement);
  });
});