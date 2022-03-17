import styled from 'styled-components'

export const StyledHeader = styled.div`
    width: 100%;
    height: 8%;
    background-color: ${props => props.theme.colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        color: ${props => props.theme.colors.main};
        font-weight: 700;
        font-size: 3rem;
        padding-left: 2rem;
        letter-spacing: .5rem;
    }

    
` 