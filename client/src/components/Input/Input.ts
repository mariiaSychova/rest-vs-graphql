import styled from "styled-components";

export const InputCon = styled.label`
    display: flex;
    flex-direction: column;
    gap: 6px;

    input {
        box-sizing: border-box;
        width: 100%;
        padding: 12px 24px;
        min-height: 36px;

        border: 1px solid var(--color-border);
        background: var(--color-background-secondary);
        border-radius: 5px;
        
        font-size: 14px;
        line-height: 21px;

        color: var(--color-text);

        outline: none !important;

        &::placeholder {
            color: var(--color-text);
        }
    }
`