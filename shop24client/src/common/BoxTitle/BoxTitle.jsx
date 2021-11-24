import React from "react";
import { BoxWrapper, Title, PrimaryButton } from "./styles";
import Input from "common/Input";
import { useHistory } from "react-router";
export default function BoxTitle({ title, showInput = false, buttonTitle,onChange,path }) {
    const history = useHistory()
    const handlePathChange = () =>{
        history.push('/app/'+path)
    }

  return (
    <BoxWrapper>
      <Title>{title}</Title>
      {showInput && (
        <Input
          variant="outlined"
          size="small"
          placeholder="Search"
          onChange={onChange}
        />
      )}
      <PrimaryButton onClick={handlePathChange}>{buttonTitle}</PrimaryButton>
    </BoxWrapper>
  );
}
