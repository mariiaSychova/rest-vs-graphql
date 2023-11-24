import styled from 'styled-components'

export const BookFormCon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .booksForm {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
    }

    .checkbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        cursor: pointer;

        &::before {
            content: '';
            width: 20px;
            height: 20px;
            border-radius: 4px;
            border: 2px solid var(--color-border);
            transition: all .3s ease-in-out;
        }

        &.checked::before {
            background: var(--color-background-secondary);
        }

        input {
            display: none;
        }
    }

`