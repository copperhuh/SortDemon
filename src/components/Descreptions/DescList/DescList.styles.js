import styled from "styled-components";

const DescListStyled = styled.div`
	padding: 2rem;

	ul {
		list-style: none;
	}

	button {
		background: none;
		border: none;
		font-family: ${(props) => props.theme.fonts.main};
		color: ${(props) => props.theme.colors.dark};
		&:hover,
		&:focus {
			color: ${(props) => props.theme.colors.main};
		}
	}

	.btn-subtitle {
		font-size: 1.1rem;
		margin: 0.5rem 0;
		letter-spacing: 0.7px;
	}

	.btn-desc-name {
		font-size: 1rem;
		margin: 0.25rem 0;
	}

	.active {
		color: ${(props) => props.theme.colors.main};
	}
`;

export default DescListStyled;
