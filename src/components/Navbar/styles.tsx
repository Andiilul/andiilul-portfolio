import { Box, Typography, styled } from "@mui/material";

export const NavbarWrapper = styled(Box)({
	position: "fixed",
	zIndex: "100",
	top: "0",
	maxWidth: "100vw",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	backdropFilter: "blur(12px)",
});

export const NavbarContainer = styled(Box)({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	padding: "16px 32px",
});

export const NavItemContainer = styled(Box)({
	display: "flex",
	gap: "8px",
	justifyContent: "flex-end",
	userSelect: "none",
});

export const NavItems = styled(Typography)(({ theme }) => ({
	cursor: "pointer",
	"&:hover": {
		color: theme.palette.primary.main,
	},
	transition: "200ms",
	letterSpacing: "1px",
}));
