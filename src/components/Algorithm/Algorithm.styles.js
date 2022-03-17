import styled from "styled-components";

const AlgorithmStyled = styled.div`
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 600px;
    align-items: center;
    justify-content: space-evenly;
    padding: 5% 0;

    .nodes{
        height: 80%;
        width: 80%;
        display: flex;
        justify-content: flex-end;
    }
    .node-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0 0;
        margin: 0 auto;
    }
    .node-coloured{
        background: ${props => props.theme.colors.light};
        width: 100%;
    }
    .node-arrow{
        width: 100%;
        height: fit-content;
        text-align: center;
    }
    .active{
        background: ${props => props.theme.colors.main}
    }
`

export default AlgorithmStyled