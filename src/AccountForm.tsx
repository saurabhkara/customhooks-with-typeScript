import React from "react";
import FormWrapper from "./FormWrapper";

interface IuserDataType {
  email: string;
  password: string;
}

interface IpropType extends IuserDataType {
  updateUserData: (fields: Partial<IuserDataType>) => void;
}

export default function AccountForm({
  email,
  password,
  updateUserData,
}: IpropType) {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        type="email"
        autoFocus
        required
        value={email}
        onChange={(e) => updateUserData({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateUserData({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
