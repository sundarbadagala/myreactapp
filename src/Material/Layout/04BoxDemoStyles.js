import { alpha } from "@mui/material/styles";

export const BoxMain = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: 1,
  fontWeight: "bold",
  width: { xs: "300px", md: "900px" },
};
export const BoxImg = {
  height: 233,
  width: 350,
  maxHeight: { xs: 233, md: 167 },
  maxWidth: { xs: 350, md: 250 },
};
export const BoxContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", md: "flex-start" },
  m: 3,
  minWidth: { md: 350 },
};
export const BoxPrice = {
  color: "primary.main",
  fontSize: 22,
};
export const BoxTitle = { fontSize: 16, mt: 1 };
export const BoxScore = {
  mt: 1.5,
  p: 0.5,
  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
  borderRadius: "5px",
  color: "primary.main",
  fontWeight: "medium",
  display: "flex",
  fontSize: 12,
  alignItems: "center",
  "& svg": {
    fontSize: 21,
    mr: 0.5,
  },
};
