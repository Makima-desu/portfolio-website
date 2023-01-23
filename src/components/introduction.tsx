function Introduction()
{
    return (
        <div className="flex flex-col gap-2 drop-shadow relative p-4 place-items-center text-center">
            {/* <div className="absolute -inset-1 lg:-inset-2 bg-teal-700 blur-[2px] opacity-75 rounded-lg shadow"></div> */}
            <h3 className="relative text-lg text-teal-400 font-bold">Hello, and welcome to the portfolio of</h3>
            <a href="https://github.com/Makima-desu" className="relative group text-3xl md:text-4xl text-teal-200 font-bold">
                <span className="bg-bottom bg-no-repeat bg-gradient-to-r from-teal-600 to-teal-600 bg-[length:100%_2px] transition-all duration-300 p-1 group-hover:bg-[length:100%_20px]">Makima-desu.</span>
            </a>
            <p className="relative text-teal-100 lg:w-[30rem] text-center mt-2">
                Right now I enjoy developing websites using TypeScript and frameworks like Angular, Vite, and Next.js.
            </p>
            <p className="relative text-teal-100 lg:w-[30rem] text-center">
                I have been programming for a bit over a year, which includes half a year of website development.
            </p>
        </div>
    )

}

export default Introduction