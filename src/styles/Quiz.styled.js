import styled from "styled-components";

export const StyledQuiz = styled.div`
    
`;

export const StyledCounter = styled.p`
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.secondaryFont};
`;

export const StyledQuestion = styled.div`
    h4 {
        font-size: ${props => props.theme.fontSizes.xLarge};
        min-height: 12vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h5 {
        color: ${props => props.theme.colors.secondaryFont};
        font-size: ${props => props.theme.fontSizes.small};
    }
`;

export const AnswersWrapper = styled.div`
    margin: 2vh 0;
    display: grid;
    grid-template-columns: repeat(2, max(360px, 28vw));
    grid-template-rows: repeat(2, max(180px, 22vh));
    justify-content: center;
    grid-gap: 2vh;

    button {
        font-size: ${props => props.theme.fontSizes.large};
        padding: 2vh 1vw;
        border-radius: 1vw;
        opacity: 0.8;
        transition: 0.2s;

        &.correct {
            background: ${props => props.theme.colors.correct};
            opacity: 1;
        }

        &.incorrect {
            background: ${props => props.theme.colors.incorrect};
            opacity: 0.8;

            &:hover {
                opacity: 0.8;
            }
        }

        :hover {
            opacity: 1;
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, max(180px, 22vh));
    }
`

export const StyledScoreboard = styled.div`
    p {
        font-size: ${props => props.theme.fontSizes.xxLarge};
    }

    button {
        margin-top: 4vh;
        font-size: ${props => props.theme.fontSizes.medium};
        padding: 1vh 1vw;
        background: none;
        border: 2px solid ${props => props.theme.colors.primaryFont};
        border-radius: 1vw;
        transition: 0.4s;
        color: ${props => props.theme.colors.primaryFont};

        :hover {
            cursor: pointer;
            border-color: ${props => props.theme.colors.secondaryFont};
            color: ${props => props.theme.colors.primary};
            background: ${props => props.theme.colors.secondaryFont};
        }
    }
`;

export const StyledTimer = styled.div`
    h6 {
        color: ${props => props.theme.colors.secondaryFont};
        font-size: ${props => props.theme.fontSizes.xxLarge};
    }

    p {
        font-size: ${props => props.theme.fontSizes.small};
    }
`;
