import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

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
