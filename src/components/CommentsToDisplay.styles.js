import styled from "styled-components";


export const CommentItem = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    box-shadow: 0px 1px 10px 2px rgba(0,0,0,0.08);
    padding: 2rem;
    margin-bottom: 2rem;
    border-width: 2px;
     border-style: solid;
    border-image: linear-gradient(to right, darkblue, darkorchid) 1;
`;

export const CommentTitle = styled.h1 `
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
`;

export const CommentEmail = styled.h3 `
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colorGrey};
`;

export const CommentContent = styled.p `
    color: ${props => props.theme.colorGrey};
`;

