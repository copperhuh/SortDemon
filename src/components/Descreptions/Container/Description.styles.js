import styled from "styled-components";

const DescreptionStyled = styled.div`
	padding: 2rem 4rem;
	margin: 0 3rem;
	background: ${(props) => props.theme.colors.dark};
	color: ${(props) => props.theme.colors.light};
	font-size: 1.1rem;
	.bold {
		font-weight: 600;
		color: ${(props) => props.theme.colors.main};
	}
	p {
		line-height: 1.8;
		margin: 2rem 0;
	}
	h2 {
		text-align: center;
		font-size: 3rem;
	}
	a {
		font-weight: 600;
		color: ${(props) => props.theme.colors.main};
		&:hover {
			color: ${(props) => props.theme.colors.light};
		}
	}
	h3 {
		font-size: 2rem;
		margin-bottom: 0.3rem;
	}
	li {
		margin: 1rem;
		line-height: 1.6;
	}
	h4 {
		font-size: 1.8rem;
		margin: 5rem 0 0;
		color: ${(props) => props.theme.colors.light};
	}
	img {
		display: block;
		margin: 3.5rem auto;
		max-width: 100%;
		background: ${(props) => props.theme.colors.absoluteLight};
	}
	ol img {
		margin-left: -2rem;
	}
	@media (max-width: 900px) {
		padding: 2rem 0;
		margin: 0;
		margin-left: -1.5rem;

		/* z-index: -1;
		position: absolute;
		top: 0;
		left: 0; */
	}
`;

export default DescreptionStyled;
