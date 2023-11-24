import React, { FC } from 'react'
import { BooksListCon } from './BooksList'
import { IBook } from '../../../models'
import BookItem from '../BookItem/BookItem.tsx'

interface Props {
    books: IBook[]
    handleDeleteBook?: (e: React.MouseEvent<HTMLElement>, id: number) => void
    handleEditBook?: (v: number) => void
    handleMakeVisibleBook?: (e: React.MouseEvent<HTMLElement>, params: {id: number, visible: boolean}) => void
}

const BooksList: FC<Props> = ({ books, handleDeleteBook, handleEditBook, handleMakeVisibleBook }) => {
    return <BooksListCon>
        {books.map((book, index) => 
            <BookItem 
                key={`book_${index}`} 
                book={book} 
                handleDeleteBook={handleDeleteBook} 
                handleEditBook={handleEditBook}
                handleMakeVisibleBook={handleMakeVisibleBook}
            />
        )}
    </BooksListCon>
}

export default BooksList