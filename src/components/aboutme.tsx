function Aboutme()
{
    return (
        <div className="relative text-slate-200 font-bold drop-shadow flex flex-col gap-4 p-4">
            <div className="flex flex-col justify-center items-center place-content-center place-items-center bg-teal-800 p-4 shadow rounded">
                <h1 className="relative text-2xl italic">
                    <div className="absolute -inset-1 rounded bg-white/30 rotate-3"></div>
                    <div className="relative">Makima-desu</div>
                </h1>
                <h1 className="font-bold text-xl mt-3 flex items-center gap-2 text-rose-100 italic">
                    Canada
                    <div className="relative">
                        <img src="/maple.svg" className="w-8 rotate-6 relative"></img>
                        <div className="absolute -inset-0 bg-red-300 opacity-50 blur-lg rounded-full"></div>
                    </div>
                </h1>
                <div className="flex place-content-center place-items-center gap-4 mt-3">
                    <img src="/logo.jpg" className="rounded-full w-32 border select-none" draggable="false"></img>
                    <div className="flex flex-col gap-6">
                        <a target={'blank'} href="https://github.com/Makima-desu" className="relative group">
                            <div className="absolute -inset-1 rounded-full bg-white opacity-50 blur-[1px] group-hover:bg-slate-900 transition-all duration-300"></div>
                            <svg viewBox="0 0 16 16" className="relative w-8 cursor-pointer transition-all duration-300" fill="currentColor" aria-hidden="true">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                        <a target={'blank'} href="https://www.linkedin.com/in/arthur-burmistrov-242597217/" className="relative group">
                            <div className="absolute -inset-1 rounded-lg bg-sky-600 group-hover:bg-sky-700 transition-all duration-300"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="relative w-8 cursor-pointer transition-all duration-300">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Aboutme