import { styled, Box, Typography } from "@mui/material";

export const FlowTextContainer = styled(Box)({
	position: "relative",
});

export const FlowTextContent = styled(Typography)(({ theme }) => ({
	fontSize: "inherit",
	fontWeight: "600",
	position: "absolute",
	color: "transparent",
	WebkitTextStroke: `2px ${theme.palette.primary.main}`,
}));

export const FlowTextContentShadow = styled(Typography)`
	font-size: inherit;
	font-weight: 600;
	position: absolute;
	animation: flowing 2s ease-in-out infinite;
	color: ${(props) => props.theme.palette.primary.main};

	@keyframes flowing {
		0%,
		100% {
			clip-path: polygon(
				0% 45%,
				15% 44%,
				32% 50%,
				54% 60%,
				70% 61%,
				84% 59%,
				100% 52%,
				100% 100%,
				0% 100%
			);
		}
		50% {
			clip-path: polygon(
				0% 60%,
				16% 65%,
				34% 66%,
				51% 62%,
				67% 50%,
				84% 45%,
				100% 46%,
				100% 100%,
				0% 100%
			);
		}
	}
`;
