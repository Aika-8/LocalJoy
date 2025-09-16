import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

export const GeoButton = styled(MuiButton)({
  display: "flex",
  gap: "4px",
  backgroundColor: "transparent",
  color: "#000",
  borderRadius: "8px",
  border: "1px solid #818181",
  padding: "8px 24px",
  fontWeight: "600",
  textTransform: "none",
  boxShadow: "none",
  fontSize: "14px",
  "&:hover": {
    borderColor: "#82efbc",
  },
  "&:active": {
    borderColor: "#047857",
  },
  "&.Mui-disabled": {
    color: "#c4c4c4",
  },
});
GeoButton.defaultProps = {
  disableRipple: true,
  disableElevation: true,
};

export const SlideButton = styled(MuiButton)({
  display: "flex",
  gap: "4px",
  backgroundColor: "transparent",
  color: "#000",
  borderRadius: "8px",
  border: "2px solid #2d2c2c",
  padding: "8px 24px",
  fontWeight: "400",
  textTransform: "none",
  boxShadow: "none",
  fontSize: "14px",
  "&:hover": {
    borderColor: "#82efbc",
  },
  "&:active": {
    borderColor: "#5ff0a8",
  },
  "&.Mui-disabled": {
    color: "#c4c4c4",
  },
});
SlideButton.defaultProps = {
  disableRipple: true,
  disableElevation: true,
};
