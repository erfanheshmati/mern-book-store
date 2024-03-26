import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ManageBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data))
    }, [])

    // Delete a book
    const handleDeleteBook = (id) => {
        fetch(`http://localhost:5000/book/${id}`, {
            method: "DELETE",
        }).then(res => res.json()).then(data => {
            alert("Book is deleted successfully!")
            setAllBooks(data)
        })
    }

    return (
        <div className="px-4 my-12">
            <h2 className="mb-8 text-3xl font-bold">Manage your books</h2>
            <Table className='lg:w-[1180px] md:w-[700px]'>
                <Table.Head>
                    <Table.HeadCell>No.</Table.HeadCell>
                    <Table.HeadCell>Book Title</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Edit</Table.HeadCell>
                    <Table.HeadCell>Delete</Table.HeadCell>
                </Table.Head>
                {
                    allBooks.map((book, index) =>
                        <Table.Body className="divide-y" key={book._id}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                </Table.Cell>
                                <Table.Cell>{book.bookTitle}</Table.Cell>
                                <Table.Cell>{book.authorName}</Table.Cell>
                                <Table.Cell>{book.category}</Table.Cell>
                                <Table.Cell>{book.price}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/admin/dashboard/edit-book/${book._id}`}>
                                        <FaEdit color='purple' className='size-4 hover:opacity-60' />
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleDeleteBook(book._id)}>
                                        <FaTrashAlt color='red' className='size-4 hover:opacity-60' />
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    )
                }
            </Table>
        </div>
    )
}

export default ManageBooks;