import { Avatar, Box, Typography } from "@mui/material";
import {
	NavItemContainer,
	NavItems,
	NavbarContainer,
	NavbarWrapper,
} from "./styles";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
	const scrollToView = (elementId: string) => {
		const element = document.getElementById(elementId);

		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<NavbarWrapper>
			<NavbarContainer>
				<Box display={"flex"} gap={"12px"} alignItems={"center"}>
					<Box>
						<Avatar src="/icons/logo-white.svg" />
					</Box>
					<Typography fontSize={"20px"} color={"white"}>
						Andiilul
					</Typography>
				</Box>
				<NavItemContainer>
					{NavItemList.map((nav, index) => (
						<NavItems
							title={`${
								nav.name === "Home" ? "Top" : `Scroll to ${nav.name} `
							}`}
							onClick={() => scrollToView(nav.scrollTo)}
							color={"white"}
							key={index}
						>
							{nav.name}
						</NavItems>
					))}
				</NavItemContainer>
			</NavbarContainer>
		</NavbarWrapper>
	);
};

const NavItemList = [
	{
		name: "About",
		scrollTo: "#about",
	},
	{
		name: "Projects",
		scrollTo: "#projects",
	},
	{
		name: "Skill",
		scrollTo: "#skill",
	},
];
