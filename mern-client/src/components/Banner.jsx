import BannerCard from "../home/BannerCard";

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20 md:py-40">
                {/* Left side */}
                <div className="md:w-1/2 space-y-8 h-full">
                    <h2 className="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books
                        <span className="text-blue-700"> for the Best Prices</span>
                    </h2>
                    <p className="md:w-4/5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ex sunt reiciendis esse nulla eveniet atque, deleniti, natus perspiciatis harum accusamus fuga culpa ut quidem repudiandae voluptas magni a quae?
                    </p>
                    <div>
                        <input type="search" name="search" id="search" placeholder="Search a book..." className="p-2 rounded-s-m outline-none" />
                        <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
                    </div>
                </div>

                {/* Right side */}
                <div className="px-4 lg:px-24">
                    <BannerCard />
                </div>
            </div>
        </div>
    )
}

export default Banner;