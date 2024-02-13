import { beforeEach, describe, expect, test } from "vitest";
import { user, render, screen, fireEvent, findByTestId } from "@testing-library/react";
import LeadAssessmentScreen from "../LeadAssessmentScreen";

describe("LeadAssessmentScreen", () => {
  beforeEach(() => {
    render(<LeadAssessmentScreen />);
  });
  test("make decision when city is not karachi", async () => {
    const cityInputElement = await screen.findByTestId("city");
    fireEvent.click(cityInputElement);
    fireEvent.change(cityInputElement, {
      target: { value: "Lahore" },
    });
  });
  test("should make a decision when all criteria are met", async () => {
    const city = await screen.findByTestId("city");
    fireEvent.change(city, {
      target: { value: "Karachi" },
    });
    const monthlyIncome = await screen.findByTestId("monthly-income");
    fireEvent.change(monthlyIncome, {
      target: { value: "50000" },
    });
    const downPaymentAmount = await screen.findByTestId("down-payment-amount");
    fireEvent.change(downPaymentAmount, {
      target: { value: "40000" },
    });
    const requestLoanAmount = await screen.findByTestId(
      "requested-loan-amount"
    );
    fireEvent.change(requestLoanAmount, {
      target: { value: "200000" },
    });
    const allDocumentsAvailable = await screen.findByTestId(
      "documents-available"
    );
    fireEvent.click(allDocumentsAvailable);
    const assess = await screen.findByText("Assess");
    fireEvent.click(assess);
    const decisionWaitList = await screen.findByText("Decision: WAIT_LIST");
    expect(decisionWaitList).toBeInTheDocument();
  });
  test("should make a decision when bankruptcy history is present", async () => {
    const bankruptcyHistory = await screen.findByTestId("bankrupty-history");
    fireEvent.change(bankruptcyHistory, {
      target: {
        checked: true,
      },
    });

    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);

    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test("should make a decision when monthly income is below the lower limit", async () => {
    const monthlyIncome = await screen.findByTestId("monthly-income");
    fireEvent.change(monthlyIncome, {
      target: { value: "20000" },
    });
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);

    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test("should make a decision when monthly income is above the upper limit", async () => {
    const monthlyIncome = await screen.findByTestId("monthly-income");
    fireEvent.change(monthlyIncome, {
      target: { value: "200000" },
    });
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);
    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test("should make a decision when loan amount is below the lower limit", async () => {
    const requestLoanAmount = await screen.findByTestId(
      "requested-loan-amount"
    );
    fireEvent.change(requestLoanAmount, {
      target: { value: "50000" },
    });
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);
    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test("should make a decision when loan amount is above the upper limit", async () => {
    const requestLoanAmount = await screen.findByTestId(
      "requested-loan-amount"
    );
    fireEvent.change(requestLoanAmount, {
      target: { value: "4000000" },
    });
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);
    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test("should make a decision when down payment percentage is below the lower limit", async () => {
    const downPaymentAmountLowerLimit = await screen.findByTestId("down-payment-amount");
    fireEvent.change(downPaymentAmountLowerLimit, {
      target: { value: "10000" },
    });
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);
    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test('should make a decision when down payment percentage is above the upper limit',async () => {
    const downPaymentAmountHigherLimit = await screen.findByTestId("down-payment-amount");
    fireEvent.change(downPaymentAmountHigherLimit, { target: { value: '300000' } });
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);
    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test('should make a decision when documents are not available', async () => {
    const allDocumentsAvailable = await screen.findByTestId(
      "documents-available"
    );
    fireEvent.click(allDocumentsAvailable);
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);
    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
  });
  test('should make a decision when city is not Karachi', async () => {
    const anotherCity = await screen.findByTestId("city")
    fireEvent.change(anotherCity, { target: { value: 'Lahore' } });
    const assess = await screen.findByTestId("assess");
    fireEvent.click(assess);
    const decision = await screen.findByTestId("decision");
    expect(decision).toBeInTheDocument();
   });
});