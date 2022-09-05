import { TextField } from "@mui/material";
import React from "react";
const Support = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form style={{ padding: 25 }}>
      <TextField name="email" label="email" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};
export default Support;
