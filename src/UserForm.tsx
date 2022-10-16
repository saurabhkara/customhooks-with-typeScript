import React from "react";
import FormWrapper from "./FormWrapper";

type userDetailType = {
  firstName: string;
  lastName: string;
  age: number;
};

type propType = userDetailType & {
  updateUserData: (fields: Partial<userDetailType>) => void;
};

export default function UserForm({
  firstName,
  lastName,
  age,
  updateUserData,
}: propType) {
  return (
    <FormWrapper title="User Detail">
      <label>First Name</label>
      <input
        required
        type="text"
        autoFocus
        value={firstName}
        onChange={(e) => updateUserData({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateUserData({ lastName: e.target.value })}
      />
      <label>age</label>
      <input
        type="number"
        min={1}
        value={age}
        onChange={(e) => updateUserData({ age: parseInt(e.target.value) })}
      />
    </FormWrapper>
  );
}
