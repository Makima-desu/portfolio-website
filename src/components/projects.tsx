function Projects()
{
    return (
        <div className="flex flex-col gap-10 pb-10">
            <h1 className="group text-2xl sm:text-4xl font-bold text-teal-50 drop-shadow text-center">
                <span className="underline underline-offset-8 decoration-teal-500">Projects I can showcase</span>
            </h1>
            <div className="relative flex text-white h-96 sm:w-[34rem] border border-slate-700 mx-auto rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('nwwa.png')] opacity-20 bg-cover bg-center"></div>
                <div className="flex flex-col gap-4 relative py-8 px-4 drop-shadow place-items-center">
                    <h1 className="font-bold text-xl text-teal-400 text-left underline underline-offset-8">Novel Writing Application</h1>
                    <div className="flex w-full h-full place-items-center text-center">
                        <p className="font-bold text-base md:text-lg">
                            A Novel Writing and Web Application, 
                            where you not only can you write, but 
                            also keep track of the world you wish to create.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 place-items-center">
                        <ul className="flex gap-2 text-teal-100">
                            <li>Angular</li>
                            <li>TypeScript</li>
                            <li>Tailwind</li>
                        </ul>
                        <div className="">
                            <a href="https://nwwa.vercel.app" target={'_blank'} className="group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 transition-all duration-300 hover:text-teal-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects