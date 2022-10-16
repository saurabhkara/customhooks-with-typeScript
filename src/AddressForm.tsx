import React from "react";
import FormWrapper from "./FormWrapper";

interface IuserDataType {
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: number;
}

interface IpropType extends IuserDataType {
  updateUserData: (fields: Partial<IuserDataType>) => void;
}

export default function AddressForm({
  street,
  city,
  state,
  country,
  zipcode,
  updateUserData,
}: IpropType) {
  return (
    <FormWrapper title="User Address">
      <label>Street</label>
      <input
        type="text"
        autoFocus
        required
        value={street}
        onChange={(e) => updateUserData({ street: e.target.value })}
      />
      <label>City</label>
      <input
        type="text"
        required
        value={city}
        onChange={(e) => updateUserData({ city: e.target.value })}
      />
      <label>State</label>
      <input
        type="text"
        required
        value={state}
        onChange={(e) => updateUserData({ state: e.target.value })}
      />
      <label>Country</label>
      <input
        type="text"
        required
        value={country}
        onChange={(e) => updateUserData({ country: e.target.value })}
      />
      <label>Zipcode</label>
      <input
        type="number"
        required
        value={zipcode}
        onChange={(e) => updateUserData({ zipcode: parseInt(e.target.value) })}
      />
    </FormWrapper>
  );
}
