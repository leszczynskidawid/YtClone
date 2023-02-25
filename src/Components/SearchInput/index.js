import { BasicInput } from "../Input";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

import { InputAdornment } from "@mui/material";

export const SearchInput = ({ matches }) => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [isFous, setIsFocus] = useState(false);
  const handleChange = (e) => {
    setShowClearIcon(e.target.value === "" ? "none" : "flex");
  };

  return (
    <>
      {!matches ? (
        <Box
          style={{
            display: "flex",
            overflow: "hidden",
            alignItems: "center",
            flex: 2,
            maxWidth: "700px",
          }}
        >
          <BasicInput
            placeholder={"szukaj"}
            type={"text"}
            onChange={handleChange}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="end" style={{ color: "white" }}>
                  {isFous && <SearchIcon />}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ display: showClearIcon, color: "white" }}
                >
                  <ClearIcon />
                </InputAdornment>
              ),
            }}
          />
          <div
            style={{
              background: "grey",
              width: "5rem",
              textAlign: "center",
              borderRadius: "0px 20px 20px 0px",
            }}
          >
            <IconButton>
              <SearchIcon color="primary" />
            </IconButton>
          </div>
        </Box>
      ) : (
        <IconButton onClick={() => console.log("ustaw state navabra na true")}>
          <SearchIcon color="primary" />
        </IconButton>
      )}
    </>
  );
};
