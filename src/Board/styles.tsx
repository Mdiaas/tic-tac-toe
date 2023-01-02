import styled from "styled-components";

export const Container = styled.div`
    font-family: 'sans-serif';
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100%;
    gap: 1rem;
    background-color: #0f172a;
    color: #e5e7eb;
`
export const BoardContainer = styled.div`
    width:40%;
    display:grid;
    grid-template-columns: repeat(3, 33%);
    margin: 0 auto;
    
`

export const BoardField = styled.span`
    border:1px solid #e5e7eb;
    color: #e5e7eb;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2rem;
`

export const ButtonContainer = styled.button`
    padding: 1rem 1.25rem;
    color: #e5e7eb;
    background-color:#334155;
    border-radius:8px;
    border:0;
    cursor:pointer;
    font-weight:bold;
    &:hover{
        opacity: 0.9;
    }
`