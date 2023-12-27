import { Avatar, Box, Button, Typography } from "@mui/material";
import {
	AnimatedText,
	HeroContainer,
	HeroWrapper,
	HeroText,
	ButtonContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { FlowText } from "../FlowText";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Hero: React.FC = () => {
	const animText = [
		{
			first: "Hello There",
			second: "Andiilul Here",
		},
		{
			first: "Welcome To",
			second: "My Page",
		},
		{
			first: "Lets Grow",
			second: "Together",
		},
	];

	const maxIndex = animText.length - 1;
	const [textIndex, setTextIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex((prevTextIndex) =>
				prevTextIndex === maxIndex ? 0 : prevTextIndex + 1
			);
		}, 6000);

		return () => clearInterval(interval);
	}, [maxIndex]);

	return (
		<HeroWrapper id="hero">
			<HeroContainer>
				<HeroText>
					{animText.map((text, index) => {
						if (index === textIndex) {
							return (
								<AnimatedText
									maxWidth={"520px"}
									color={"white"}
									fontWeight={"600"}
									sx={{
										userSelect: "none",
									}}
								>
									<Box display={"flex"} flexDirection={"column"}>
										<Typography fontSize={"72px"} lineHeight={"78px"}>
											{text.first}
										</Typography>
										<FlowText height="88px">
											<Typography fontSize={"72px"} lineHeight={"78px"}>
												{text.second}
											</Typography>
										</FlowText>
									</Box>
								</AnimatedText>
							);
						} else {
							return null;
						}
					})}
					<Typography
						fontSize={"38px"}
						lineHeight={"42px"}
						fontWeight={400}
						letterSpacing={"-1px"}
					>
						I'am{" "}
						<Typography
							component={"span"}
							fontSize={"inherit"}
							lineHeight={"inherit"}
							fontWeight={600}
							color={"primary.main"}
							sx={{
								userSelect: "none",
							}}
						>
							Andi M. Fadhilul Asyam Hafid
						</Typography>
					</Typography>
					<Typography
						sx={{
							userSelect: "none",
						}}
						fontSize={"22px"}
						fontWeight={300}
					>
						A{" "}
						<Typography
							component={"span"}
							fontSize={"inherit"}
							color={"primary.main"}
						>
							Front-end developer{" "}
						</Typography>
						that passionate about creating user-centric, visually stunning
						websites. Let's build something amazing together!
					</Typography>
					<ButtonContainer>
						<Button
							sx={{
								textTransform: "none",
								fontWeight: "300",
								fontSize: "18px",
								width: "max-content",
							}}
							variant="contained"
							size="large"
						>
							Contact Me
						</Button>
						<Button
							sx={{
								textTransform: "none",
								fontWeight: "300",
								fontSize: "18px",
								width: "max-content",
							}}
							variant="text"
						>
							My Projects
							<ArrowForwardIcon
								sx={{
									height: "18px",
								}}
							/>
						</Button>
					</ButtonContainer>
				</HeroText>
				<Avatar sx={{ width: 360, height: 360 }} src="/images/hero-2.png" />
			</HeroContainer>
		</HeroWrapper>
	);
};
