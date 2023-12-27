import "./App.css";
import { Navbar } from "./components/Navbar";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { Hero } from "./components/Hero";
import { Box } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#D61C81",
			dark: "#5B183C",
		},
		secondary: {
			main: "#161616",
		},
	},
	typography: {
		fontFamily: "Rubik, sans-serif",
	},
});

const AppContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	width: "100vw",
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<AppContainer>
				<Hero />
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
