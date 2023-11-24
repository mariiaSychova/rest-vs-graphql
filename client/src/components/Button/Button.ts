import styled from "styled-components";

export const ButtonCon = styled.button`
    width: 100%;
    padding: 12px 0;
    min-height: 36px;
    
    font-family: Poppins;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--color-text);

    border: 1px solid var(--color-border);
    border-radius: 5px;
    background: var(--color-background-secondary);

    cursor: pointer;
    transition: all .3s ease-in-out;

    &:disabled {
        opacity: 0.5;
        cursor: initial;
    }
`
