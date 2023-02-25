import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

export const BasicInput = ({
  placeholder,
  type,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const StyledTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
      color: white;
      & fieldset {
        border-radius: 20px 0 0px 20px;
        border-color: white;
      }

      &.Mui-focused fieldset {
        color: orange;
        border-color: white;
      }
    }
  `;
  return (
    <StyledTextField
      {...props}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      size="small"
      variant="outlined"
      onFocus={onFocus}
      onBlur={onBlur}
      fullWidth={true}
    ></StyledTextField>
  );
};
