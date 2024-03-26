import { useEffect, useState } from "react"
import { Card } from 'flowbite-react';



const Shop = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center">All Books Here</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
                {
                    books.map(book =>
                        <Card>
                            <img src={book.imageURL} alt="" className="w-full h-80" />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {book.bookTitle}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                            <button className="bg-blue-700 font-semibold text-white rounded-md py-2 hover:bg-black">Buy Now</button>
                        </Card>)
                }
            </div>
        </div>
    )
}

export default Shop