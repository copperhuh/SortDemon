import styled from "styled-components";

export const StyledSortSettingsShown = styled.div`
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.main};
    height: fit-content;
    width: 100%;
    .container{
        font-weight: 900;
        font-size: 1.5rem;
        height: 100%;
        max-width: min(1200px, 100%);
        display: grid;
        grid-template: 2rem 1fr 1fr 2rem / 1fr 2rem 9fr 3rem 7fr 6rem 3fr 1rem 3fr;
        grid-template-areas:
        'hide . . . . . . . .' 
        'hide . size . shuffle-type-buttons . shuffle . pause'
        'hide . speed . shuffle-type-buttons . restart . start'
        'hide . . . . . . . .';
    }
    div{
        width: 100%;
        height: 100%;
        
    }
    .hide{
        grid-area: hide;
        background: none;
        border: none;
        color: ${props => props.theme.colors.main};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover{
            background: ${props => props.theme.colors.main};
            color: ${props => props.theme.colors.dark};
        }
    }
    .size{
        grid-area: size;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .slider{
        width: 50%;
        /* margin: 0 10% 0 auto; */
        color: ${props => props.theme.colors.main};
    }
    .speed{
        grid-area: speed;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .num-field{
        width: 3em;
        font-size: 1.5rem ;
        font-weight: 600;
        font-family: ${props => props.theme.fonts.main} ;
        color: ${props => props.theme.colors.main} ;
        background: none;
        border: none;
        &:focus, &:hover{
            outline: none;
            border-bottom: 1px solid ${props => props.theme.colors.main};
        }
    }
    .shuffle-type-label{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .shuffle-type-buttons{
        grid-area: shuffle-type-buttons;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .shuffle-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .shuffle-btn{
        background: none;
        border: none;
        color: ${props => props.theme.colors.main};
        font-family: ${props => props.theme.fonts.main};
        font-size: .9rem;
        border: 1px solid ${props => props.theme.colors.main};
        padding: .5rem 1rem;
        &:hover{
            background: ${props => props.theme.colors.main};
            color: ${props => props.theme.colors.dark};
            border: 1px solid ${props => props.theme.colors.dark};
        }
    }
    .active{
        background: ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.dark};
        border: 1px solid ${props => props.theme.colors.dark};

    }
    .shuffle{
        grid-area: shuffle;
    }
    .restart{
        grid-area: restart;
    }
    .pause{
        grid-area: pause;
    }
    .start{
        grid-area: start;
    }
    .cntrl-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .5rem 0;
        button{
            background: ${props => props.theme.colors.main};
            border: none;
            color: ${props => props.theme.colors.dark};
            font-family: ${props => props.theme.fonts.main};
            border: 1px solid ${props => props.theme.colors.dark};
            font-size: 1.1rem;
            padding: .7rem 1.7rem;
            &:hover{
                background: ${props => props.theme.colors.dark};
                color: ${props => props.theme.colors.main};
                border: 1px solid ${props => props.theme.colors.main};
            }
        }
    }
`

export const StyledSortSettingsHidden = styled.div`
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.main};
    height: fit-content;
    width: 100%;
    .container{
        font-weight: 900;
        font-size: 1.5rem;
        height: 100%;
        max-width: min(1200px, 100%);
        /* display: grid;
        grid-template: 1fr 1rem / 1fr 2rem 2fr 3rem 2fr 2rem 2fr 2rem 2fr;
        grid-template-areas:
        'hide . shuffle . pause . restart . start'
        'hide . . . . . . . .'; */
        display: flex;
        justify-content: left;
    }
    div{
        width: fit-content;
        height: 100%;
    }
    .hide{
        /* grid-area: hide; */
        background: none;
        border: none;
        color: ${props => props.theme.colors.main};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover{
            background: ${props => props.theme.colors.main};
            color: ${props => props.theme.colors.dark};
        }
    }
    /* .shuffle{
        grid-area: shuffle;
    }
    .restart{
        grid-area: restart;
    }
    .pause{
        grid-area: pause;
    }
    .start{
        grid-area: start;
    } */
    .cntrl-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .5rem .2rem;
        button{
            display: flex;
            align-items: center;
            background: ${props => props.theme.colors.dark};
            border: none;
            color: ${props => props.theme.colors.main};
            font-family: ${props => props.theme.fonts.main};
            border: 1px solid ${props => props.theme.colors.main};
            font-size: 1.1rem;
            padding: .7rem 1.7rem;
            &:hover{
                background: ${props => props.theme.colors.main};
                color: ${props => props.theme.colors.dark};
                border: 1px solid ${props => props.theme.colors.dark};
            }
        }
    }
`