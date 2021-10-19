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

export const QuestionTitle = styled.div`
    font-size: 22px;
    font-weight: 500;
    color: var(--font-grey);
    text-align: left;
    line-height: 28px;
    padding: 16px;

    a{
        color: var(--font-grey);
        text-decoration: underline;
    
    }

    @media screen and (max-width: 550px) {
        font-size: 14px;
        line-height: 18px;
    }
`

export const ResponseContent = styled.div`
    overflow: hidden;
    margin-bottom: 24px;
    padding-left: 64px;

    ol, ul{
    padding-left: 24px;

    }
`

export const ResponseText = styled.div`
    transition: 0.5s ease;
    color: var(--font-grey);
    font-size: 18px;
    line-height: 28px;
    width: fit-content;
    display: grid;
    margin-top: 10px;

    .task-list-item{
        list-style-type: none;     
    }

    img{
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0 30px ;
    }

    blockquote{

        border-left: 4px solid #8B949E ;
        margin: 0 12px;
        padding-left: 16px;
    }


    table{
    border-radius: 3px;
    display: block;
    width: fit-content;


    td, th{
        border: 1px solid #555;
        text-align: left ;
        vertical-align: middle ;
        padding: 8px 13px;
        margin: 0;
    }
}

    @media screen and (max-width: 500px) {
        font-size: 12px;
        line-height: 18px;
       
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        padding-right: 32px;
    }

`

export const Rotate = styled.div`
    transform: rotate(270deg);
    transition:ease-in-out 0.4s;
`

export const RotateActive = styled.div`
    transform: rotate(360deg);
`

