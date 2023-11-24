import styled from 'styled-components'

export const BookItemCon = styled.div`
    position: relative;

    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    border: 1px solid var(--color-border);
    border-radius: 8px;

    transition: all .3s ease-in-out;

    .title {
        font-size: 20px;
        font-weight: 600;
    }

    &.admin {
        opacity: 0.5;

        &.visible {
            opacity: 1;
        }
    }

    .editBtn,
    .deleteBtn, 
    .visibleBtn {
        width: 24px;
        height: 24px;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        border-radius: 50%;
        background: white;

        display: flex;
        justify-content: center;
        align-items: center;

        opacity: 0;
        transition: all 0.3s ease-in-out;
        z-index: 2;

        cursor: pointer;
    }

    .editBtn {
        right: 88px;

        svg {
            width: 14px;
            height: 14px;
        }
    }

    .deleteBtn {
        right: 20px;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    .visibleBtn {
        right: 54px;

        svg {
            width: 14px;
            height: 14px;
        }
    }

    &:hover {
        background: var(--color-background-secondary);
        box-shadow: 0 0 10px var(--color-background-secondary);

        .editBtn,
        .deleteBtn, 
        .visibleBtn {
            opacity: 1;
        }
    }
`