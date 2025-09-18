import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

const BaseButton = styled(MuiButton)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  borderRadius: "8px",
  padding: "8px 24px",
  fontWeight: "400",
  textTransform: "none",
  boxShadow: "none",
  fontSize: "14px",
  transition: "all 0.3s ease",
  "&.Mui-disabled": {
    color: "#c4c4c4",
    backgroundColor: "#f5f5f5",
  },
});
BaseButton.defaultProps = {
  disableRipple: true,
  disableElevation: true,
};

export const GeoButton = styled(BaseButton)({
  backgroundColor: "transparent",
  color: "#000",
  border: "1px solid #818181",
  "&:hover": {
    borderColor: "#82efbc",
  },
  "&:active": {
    borderColor: "#047857",
  },
});

export const SlideButton = styled(BaseButton)({
  backgroundColor: "transparent",
  color: "#000",
  border: "2px solid #2d2c2c",
  fontWeight: "400",
  "&:hover": {
    borderColor: "#82efbc",
  },
  "&:active": {
    borderColor: "#5ff0a8",
  },
});

export const StockButton = styled(BaseButton)({
  backgroundColor: "#ffffff",
  color: "#109972",
  border: "none",
  fontSize: "12px",
  borderRadius: "9999px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  "&:hover": {
    backgroundColor: "#ecfdf5",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
  "&:active": {
    backgroundColor: "#d1fae5",
  },
});
