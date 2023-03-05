import { BasicInput } from "../Input";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import { Borders, theme } from "../../Style/Theme";

const SearchInputContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex: 2;
  max-width: 700px;
  overflow: hidden;
`;
const SearchButtonContainer = styled(Box)`
  background-color: ${theme.palette.grey.main};
  width: 5rem;
  text-align: center;
  border-radius: 0 ${Borders.borderRadius.normal} ${Borders.borderRadius.normal}
    0;
`;

export const SearchInput = ({ matches, openSerchInput }) => {
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [isFous, setIsFocus] = useState(false);
  const handleChange = (e) => {
    setShowClearIcon(e.target.value === "" ? false : true);
  };

  return (
    <>
      {!matches ? (
        <SearchInputContainer>
          <BasicInput
            placeholder={"szukaj"}
            type={"text"}
            onChange={handleChange}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {isFous && <SearchIcon />}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {showClearIcon && <ClearIcon />}
                </InputAdornment>
              ),
            }}
          />
          <SearchButtonContainer>
            <IconButton>
              <SearchIcon color="primary" />
            </IconButton>
          </SearchButtonContainer>
        </SearchInputContainer>
      ) : (
        <IconButton onClick={openSerchInput}>
          <SearchIcon color="primary" />
        </IconButton>
      )}
    </>
  );
};
