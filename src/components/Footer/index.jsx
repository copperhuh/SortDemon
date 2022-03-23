import React from "react";
import FooterStyled from "./Footer.styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
	return (
		<FooterStyled>
			<div className="made-by">made by Jakub Koper</div>
			<div className="contact">
				<div className="contact-title">Contact:</div>
				<div>
					<div className="contact-sub">
						<MailOutlineIcon sx={{ fontSize: "2.4rem" }} />
						<span>jakub.koper@wpc-huh.com</span>
					</div>
					<a href="https://github.com/copperhuh">
						<div className="contact-sub github">
							<GitHubIcon sx={{ fontSize: "2.4rem" }} />
							Github
						</div>
					</a>
				</div>
			</div>
		</FooterStyled>
	);
}
