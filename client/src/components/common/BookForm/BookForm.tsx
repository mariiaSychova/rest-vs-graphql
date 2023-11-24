import React, { FC, useEffect, useState } from 'react'
import { BookFormCon } from './BookForm'
import { IBook } from '../../../models'
import Input from '../../../components/Input/Input.tsx';
import Button from '../../Button/Button.tsx';

interface Props {
    handleSaveEditedBook: (v: IBook) => void
    handleAddBook: (v: IBook) => void
    editBook?: IBook
}

const BookForm: FC<Props> = ({ editBook, handleSaveEditedBook, handleAddBook}) => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publication_year, setPublication_year] = useState('')
    const [genre, setGenre] = useState('')
    const [visible, setVisible] = useState(true)

    const [isBookLoading, setIsBookLoading] = useState(false)

    useEffect(() => {
        if (editBook !== undefined) {
            setTitle(editBook.title)
            setAuthor(editBook.author)
            setPublication_year(editBook.publication_year)
            setGenre(editBook.genre)
            setVisible(editBook.visible)
        }
    }, [editBook])

    const clearForm = () => {
        setTitle('')
        setAuthor('')
        setPublication_year('')
        setGenre('')
        setVisible(true)
        setIsBookLoading(false)
    }

    const handleAdd = async () => {
        setIsBookLoading(true)
        await handleAddBook({
            id: 0,
            title,
            author,
            publication_year,
            genre,
            visible
        })
        clearForm()
    }

    const handleEdit = async () => {
        setIsBookLoading(true)
        handleSaveEditedBook({
            id: editBook?.id || 0,
            title,
            author,
            publication_year,
            genre,
            visible
        })
        clearForm()
    }
    
    return <BookFormCon>
        <div className="booksForm">
            <Input value={title} setValue={setTitle} label='Title' placeholder='Enter title' />
            <Input value={author} setValue={setAuthor} label='Author' placeholder='Enter author' />
            <Input value={publication_year} setValue={setPublication_year} label='Publication_year' placeholder='Enter publication_year' />
            <Input value={genre} setValue={setGenre} label='Genre' placeholder='Enter genre' />
        </div>
        <label className={`checkbox ${visible && 'checked'}`}>
            <input type="checkbox" checked={visible} onChange={() => setVisible(v => !v)} />
            Visible / Invisible
        </label>
        <Button 
                    text={editBook !== undefined ? 'Save' : 'Add'} 
                    onClick={() => {
                        if (editBook !== undefined) {
                            handleEdit()
                        } else {
                            handleAdd()
                        }
                    }} 
                    className='addBtn'
                    disabled={!title || !author || !publication_year || !genre || isBookLoading} 
        />
    </BookFormCon>
}

export default BookForm