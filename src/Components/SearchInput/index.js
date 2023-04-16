import { BasicInput } from "../Input";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { styled } from "@mui/material";
// import { apiClient } from "../../Helpers/apiClient";
// import { useApi } from "../../Hooks/useApi";

const SearchInputContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex: 2;
  max-width: 700px;
  overflow: hidden;
`;
const SSearchiconButton = styled(IconButton)(({ theme }) => ({
  border: "1px solid",
  borderRadius: "0px 20px 20px 0px",
  borderColor: theme.palette.secondary.main,
  background: theme.palette.grey.main,
  width: "5rem",
  maxHeight: "40px",
}));

export const SearchInput = ({ matches, openSerchInput }) => {
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [isFous, setIsFocus] = useState(false);
  // const [searchInputValue, setSearchInputValue] = useState("");

  const handleChange = (e) => {
    setShowClearIcon(e.target.value === "" ? false : true);
    // setSearchInputValue(e.target.value);
  };
  // const { data, loading, fetchData, error } = useApi();
  // const search = () => {
  //   fetchData(`search?part=snippet&q=${searchInputValue}&maxResults=12 `);
  //   console.log(searchInputValue);
  //   console.log(data);
  // };

  return (
    <>
      {!matches ? (
        <SearchInputContainer>
          <BasicInput
            placeholder={"szukaj"}
            type={"text"}
            onChange={(e) => handleChange(e)}
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

          <SSearchiconButton>
            <SearchIcon fontSize="3rem" />
          </SSearchiconButton>
        </SearchInputContainer>
      ) : (
        <IconButton onClick={openSerchInput}>
          <SearchIcon />
        </IconButton>
      )}
    </>
  );
};
