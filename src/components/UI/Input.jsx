import { forwardRef, useState } from "react";
import { TextField, InputAdornment, styled } from "@mui/material";
import { Icons } from "../../assets";

export const Input = forwardRef(
  (
    {
      value,
      onChange,
      name,
      placeholder = "",
      type = "text",
      InputProps,
      error = false,
      helperText = "",
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    const isPassword = type === "password";

    return (
      <StyledInput
        inputRef={ref}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={isPassword && !showPassword ? "password" : "text"}
        fullWidth
        error={error}
        helperText={helperText}
        InputProps={{
          ...InputProps,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <button onClick={handleTogglePassword} edge="end">
                {showPassword ? <Icons.OnPeephole /> : <Icons.Peephole />}
              </button>
            </InputAdornment>
          ) : (
            InputProps?.endAdornment || null
          ),
        }}
        variant="outlined"
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";

const StyledInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    width: "400px",
    backgroundColor: "transparent",
    borderRadius: 10,
    height: 42,
    paddingRight: 8,
    boxSizing: "border-box",

    "& .MuiOutlinedInput-input": {
      padding: "10px 12px",
      height: "100%",
      boxSizing: "border-box",
    },

    "& .MuiInputAdornment-root": {
      height: "100%",
      maxHeight: 42,
    },

    "& .MuiIconButton-root": {
      padding: 8,
      height: "100%",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#82efbc",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1eb087",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#818181",
  },
}));
