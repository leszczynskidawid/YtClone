import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    color: ${(props) => props.theme.palette.primary.main};
    & fieldset {
      border-radius: 20px 0 0px 20px;
      border-color: ${(props) => props.theme.palette.grey.main};
    }

    &.Mui-focused fieldset {
      color: ${(props) => props.theme.palette.primary.main};
      border-color: ${(props) => props.theme.palette.grey.main};
    }
  }
`;

export const BasicInput = ({
  placeholder,
  type,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
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
