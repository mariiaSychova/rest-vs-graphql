import React, { FC } from 'react'
import { BookItemCon } from './BookItem'
import { IBook } from '../../../models'
import { useIsAuthenticated } from '@azure/msal-react';
import classNames from 'classnames'

interface Props {
    book: IBook
    handleDeleteBook?: (e: React.MouseEvent<HTMLElement>, id: number) => void
    handleEditBook?: (v: number) => void
    handleMakeVisibleBook?: (e: React.MouseEvent<HTMLElement>, params: {id: number, visible: boolean}) => void
}

const BookItem: FC<Props> = ({ book, handleDeleteBook, handleEditBook, handleMakeVisibleBook }) => {

    const isAuthenticated = useIsAuthenticated()

    return <BookItemCon className={classNames({'visible': book.visible}, {'admin': true})}>
        <div className='title'>{book.title}</div>
        <div>{book.author}</div>
        <div>{book.publication_year}</div>
        <div>{book.genre}</div>

        {
            isAuthenticated ?
                <>
                    <div className="editBtn" onClick={(e) => handleEditBook && handleEditBook(book.id)}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977 20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z" stroke="#040403" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="deleteBtn" onClick={(e) => handleDeleteBook && handleDeleteBook(e, book.id)}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636" stroke="#040403" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="visibleBtn" onClick={(e) => handleMakeVisibleBook && handleMakeVisibleBook (e, {id : book.id, visible : !book.visible})}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#040403" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#040403" stroke-width="1.5"/>
                        </svg>
                    </div>
                </>
                : null
        }
    </BookItemCon>
}

export default BookItem