import styled from "styled-components";

const FooterStyled = styled.div`
	width: 100%;
	padding: 5rem;
	text-align: center;
	background: ${(props) => props.theme.colors.light};
	text-transform: uppercase;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: ${(props) => props.theme.colors.dark};
	& > div {
		margin: auto;
	}
	span {
		text-transform: none;
		display: block;
	}
	.contact {
		display: flex;
		width: fit-content;
		margin: auto;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		margin: 0 auto 1rem;
	}
	.contact-sub {
		display: flex;
		justify-content: left;
		align-items: center;
		margin-top: 1rem;
	}
	svg {
		margin-right: 1rem;
	}
	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.dark};
	}
	a:hover {
		color: ${(props) => props.theme.colors.main};
	}
	.contact-title {
		font-size: 1.7rem;
	}
	.made-by {
		font-size: 1.2rem;
	}
	.github {
		padding-bottom: 0;
	}
	@media (max-width: 850px) {
		padding: 5rem 2rem;
	}
	@media (max-width: 550px) {
		flex-direction: column;
		.made-by {
			margin-bottom: 1rem;
		}
	}
	@media (max-width: 350px) {
		padding: 5rem 0;
		.contact-sub {
			flex-direction: column;
			justify-content: center;
		}
		svg {
			margin: 0;
			margin-bottom: 0.4rem;
		}
	}
`;

export default FooterStyled;
