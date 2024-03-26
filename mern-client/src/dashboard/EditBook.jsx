import { useState } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';



const EditBook = () => {

    const { id } = useParams()

    const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL, price } = useLoaderData()

    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Biography",
        "Autobiography",
        "History",
        "Self-Help",
        "Memoir",
        "Business",
        "Children",
        "Travel",
        "Education",
        "Religion",
        "Art",
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value)
    }

    const handleUpdateBook = (event) => {
        event.preventDefault()
        const form = event.target

        const bookTitle = form.bookTitle.value
        const authorName = form.authorName.value
        const imageURL = form.imageURL.value
        const category = form.category.value
        const bookDescription = form.bookDescription.value
        const bookPdfURL = form.bookPdfURL.value
        const price = form.price.value

        const updateBookObject = {
            bookTitle,
            authorName,
            imageURL,
            category,
            bookDescription,
            bookPdfURL,
            price
        }

        // Update book data
        fetch(`http://localhost:5000/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateBookObject)
        }).then(res => res.json()).then(data => {
            alert("Book is updated successfully!")
        })
    }

    return (
        <div className="px-4 my-12">
            <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
            <form onSubmit={handleUpdateBook} className="flex lg:w-[1180px] md:w-[] flex-col flex-wrap gap-4">
                {/* First Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title:" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name..." required defaultValue={bookTitle} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name:" />
                        </div>
                        <TextInput id="authorName" name='authorName' type="text" placeholder="Author name..." required defaultValue={authorName} />
                    </div>
                </div>
                {/* Second Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Image URL:" />
                        </div>
                        <TextInput id="imageURL" name='imageURL' type="text" placeholder="Image URL..." required defaultValue={imageURL} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category:" />
                        </div>
                        <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </Select>
                    </div>
                </div>
                {/* Third Row */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description:" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' type="text" placeholder="Write your book description..." required rows={5} defaultValue={bookDescription} />
                </div>
                {/* Fourth Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookPdfURL" value="Book PDF URL:" />
                        </div>
                        <TextInput id="bookPdfURL" name='bookPdfURL' type="text" placeholder="Book PDF URL..." required defaultValue={bookPdfURL} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Book Price:" />
                        </div>
                        <TextInput id="price" name='price' type="text" placeholder="Book price..." required defaultValue={price} />
                    </div>
                </div>
                <Button type="submit" className='mt-5'>Update Book</Button>
            </form>
        </div>
    )
}

export default EditBook;