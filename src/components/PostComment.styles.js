import styled from "styled-components";

export const PostSectionTitle = styled.h3`
    margin-bottom: 1rem;
`;

export const PostSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3rem 0 5rem 0;
`;

export const CommentForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


export const CommentFiled = styled.input`
    margin: 0.4rem 0;
    width: 20rem;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #f3f3f3;
    padding: 0.6rem 0.6rem;
`;

export const CommentDataFiled = styled.textarea`
    margin: 0.4rem 0;
    width: 100%;
    height: 4rem;
    border-radius: 5px;
    border: 1px solid #f3f3f3;
    padding: 0.6rem 0.6rem;
`;

export const SubmitFiled = styled.input`
    margin: 0.4rem 0;
    width: 20rem;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.8s;
        &:hover {
        background-color: #FABB51;
        }
`;

export const PosterName = styled.input``;
export const PosterEmail = styled.input``;
export const PosterComment = styled.input``;