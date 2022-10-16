import useMultipleStep from "./useMultipleStep";
import UserForm from "./UserForm";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import { FormEvent, useState } from "react";

type TuserDetail = {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  city: string;
  state: string;
  country: string;
  email: string;
  password: string;
  zipcode: number;
};

const INTIAL_DATA: TuserDetail = {
  firstName: "",
  lastName: "",
  age: 0,
  street: "",
  city: "",
  state: "",
  country: "",
  zipcode: 0,
  email: "",
  password: "",
};

function App() {
  const [userData, setUserData] = useState(INTIAL_DATA);

  function updateUserData(fields: Partial<TuserDetail>) {
    setUserData((prev) => ({ ...prev, ...fields }));
  }

  const { steps, currentStepIndex, isFirstStep, step, back, next, isLastStep } =
    useMultipleStep([
      <UserForm {...userData} updateUserData={updateUserData} />,
      <AddressForm {...userData} updateUserData={updateUserData} />,
      <AccountForm {...userData}  updateUserData={updateUserData}/>,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault;
    next();
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          {!isFirstStep && (
            <button onClick={back} type="button">
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
