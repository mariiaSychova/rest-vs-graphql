import styled from 'styled-components'

export const HeaderCon = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
    padding: 0 72px;

    font-size: 20px;
    font-weight: bold;

    @media (max-width: 1100px) {
        padding: 0 48px;
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: 0 24px;
    }

    button{
        color: var(--color-text);
        border: 1px solid var(--color-border);
        border-radius: 5px;
        background: var(--color-background-secondary);
        padding: 4px 16px;
    }
`