import { StyledHeader } from "./Header.styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header({ theme, toggleTheme }) {
	return (
		<StyledHeader>
			<span>SORT DEMON</span>
			<div className="btns">
				<button>
					<GitHubIcon sx={{ fontSize: "2.4rem" }} />
				</button>
				<button>
					<InfoIcon sx={{ fontSize: "2.4rem" }} />
				</button>
				<button className="switch-theme-btn" onClick={toggleTheme}>
					{theme === "light" ? (
						<LightModeIcon sx={{ fontSize: "2.4rem" }} />
					) : (
						<DarkModeIcon sx={{ fontSize: "2.4rem" }} />
					)}
				</button>
			</div>
		</StyledHeader>
	);
}
