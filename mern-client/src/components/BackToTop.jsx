import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';



const BackToTop = () => {

    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsFixed(true)
            }
            else {
                setIsFixed(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
    }, [])

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
            <FaArrowAltCircleUp className={`${isFixed ? "fixed" : ""} right-4 bottom-4 text-blue-700 size-9 bg-white rounded-full border-white border z-50 cursor-pointer opacity-40 hover:opacity-100`} onClick={backToTop} />
    )
}

export default BackToTop;