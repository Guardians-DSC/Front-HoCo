import styled from 'styled-components'

export const Section = styled.div`
    display: flex;
    flex-direction: column;
`
export const QuestionContent = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    transition: 0.6s ease;
    gap: 0.25rem;

    @media screen and (max-width: 550px) {
        gap: 0.50rem;
    }
`

export const QuestionTitle = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: var(--font-grey);
    text-align: left;
    line-height: 28px;
    padding: 16px;

    @media screen and (max-width: 550px) {
        font-size: 14px;
        line-height: 18px;
    }
`

export const ResponseContent = styled.div`
    overflow: hidden;
    margin-bottom: 24px;
`

export const ResponseText = styled.p`
    transition: 0.5s ease;
    color: var(--font-grey);
    font-size: 18px;
    line-height: 28px;
    width: 100%;
    display: grid;
    grid-template-columns: 18fr 1fr;
    padding-left: 48px;
    margin-top: 10px;

    @media screen and (max-width: 550px) {
        font-size: 12px;
        line-height: 18px;
        padding-left: 0;
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20px 0 26px;
        width: fit-content;
    }
`



export const Rotate = styled.div`
    transform: rotate(270deg);
    transition:ease-in-out 0.4s;
`

export const RotateActive = styled.div `
    transform: rotate(360deg);
`
