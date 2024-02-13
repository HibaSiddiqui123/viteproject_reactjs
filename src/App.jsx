import { Link } from "react-router-dom";

function App() {
    return (
    <div className="container d-flex flex-column py-5 gap-4">
      <p className="display-6 text-center">
        Check your eligibility/ineligibility criteria
      </p>
      <div className="d-flex justify-content-center">
        <Link to="/lead-assessment" className="btn btn-primary">
          Criteria Assessment
        </Link>
      </div>
    </div>
  );
}

export default App;