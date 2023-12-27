import { Box, Typography, styled } from "@mui/material";

export const HeroWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	zIndex: "0",
	color: "white",
	minHeight: "100vh",
	width: "100%",
	backgroundColor: theme.palette.secondary.main,
}));

export const HeroContainer = styled(Box)({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0 120px",
	width: "100%",
});

export const AnimatedText = styled(Typography)`
	opacity: 0;
	transform: translateY(-30px);
	animation: fadeInAndSlide 6s cubic-bezier(0.42, 0, 0.58, 1) forwards;

	@keyframes fadeInAndSlide {
		0% {
			opacity: 0;
			transform: translateY(-30px);
		}
		10% {
			opacity: 1;
			transform: translateY(0);
		}
		90% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-30px);
		}
	}
`;

export const HeroText = styled(Box)({
	display: "flex",
	flexDirection: "column",
  maxWidth:"728px",
  gap:"16px"
});

export const ButtonContainer = styled(Box)({
	display: "flex",
	gap: "32px",
});
