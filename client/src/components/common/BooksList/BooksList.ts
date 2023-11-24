import styled from 'styled-components'

export const BooksListCon = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`