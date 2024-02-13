import { useState } from "react";

const LeadAssessmentScreen = () => {
  const [city, setCity] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [bankruptcyHistory, setBankruptcyHistory] = useState(false);
  const [documentsAvailable, setDocumentsAvailable] = useState(false);
  const [decision, setDecision] = useState("");

  const makeDecision = () => {
    if (bankruptcyHistory) {
      setDecision("INELIGIBLE_PERMANENT");
      return;
    }

    if (monthlyIncome < 30000 || monthlyIncome > 150000) {
      setDecision("INELIGIBLE_TEMPORARY");
      return;
    }

    const yearlyIncome = monthlyIncome * 12;
    if (loanAmount > yearlyIncome * 4.5) {
      setDecision("INELIGIBLE_TEMPORARY");
      return;
    }

    if (loanAmount < 100000 || loanAmount > 3000000) {
      setDecision("INELIGIBLE_TEMPORARY");
      return;
    }

    const downPaymentPercentage = (downPayment / loanAmount) * 100;
    if (downPaymentPercentage < 20 || downPaymentPercentage > 80) {
      setDecision("INELIGIBLE_TEMPORARY");
      return;
    }

    if (!documentsAvailable) {
      setDecision("WAIT_LIST_MORE_PROPERTY_DOCS");
      return;
    }

    if (city !== "Karachi") {
      setDecision("WAIT_LIST_FUTURE_CITY");
      return;
    }

    setDecision("WAIT_LIST");
  };

  return (
    <>
      <div className="container vh-100 d-flex flex-col align-items-center justify-content-center">
        <div className="row flex-grow-1">
          <div className="col-sm-12 col-md-4 d-grid gap-3 mx-auto">
            <h4 className="text-center my-4">
              Check your eligibility criteria
            </h4>
            <input
              className="form-control"
              type="text"
              data-testid="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="form-control"
              type="number"
              data-testid="monthly-income"
              placeholder="Monthly Income"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
            />
            <input
              className="form-control"
              type="number"
              data-testid="down-payment-amount"
              placeholder="Down Payment Amount"
              value={downPayment}
              onChange={(e) => setDownPayment(parseInt(e.target.value))}
            />
            <input
              className="form-control"
              type="number"
              placeholder="Requested Loan Amount"
              data-testid="requested-loan-amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
            />
            <div className="form-check ">
              <label className="form-check-label" htmlFor="bankrupty-history">
                Bankruptcy History
              </label>
              <input
                id="bankrupty-history"
                data-testid="bankrupty-history"
                type="checkbox"
                className="form-check-input"
                value={bankruptcyHistory}
                checked={bankruptcyHistory}
                onClick={() => setBankruptcyHistory(!bankruptcyHistory)}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="documents-available">
                All Documents Available
              </label>
              <input
                id="documents-available"
                data-testid="documents-available"
                className="form-check-input"
                type="checkbox"
                value={documentsAvailable}
                checked={documentsAvailable}
                onClick={() => setDocumentsAvailable(!documentsAvailable)}
              />
            </div>
            <button
              data-testid="assess"
              className="btn btn-primary"
              onClick={() => makeDecision()}
            >
              Assess
            </button>
            {decision !== "" && (
              <p data-testid="decision" className="decision">
                Decision: {decision}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadAssessmentScreen;