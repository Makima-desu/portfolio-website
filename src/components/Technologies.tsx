function Tech()
{
    return (
        <div className="relative font-bold drop-shadow flex flex-col bg-teal-700 rounded-xl">
            <div className="absolute -inset-0.5 bg-blue-200 blur-xl opacity-25"></div>
                <ul className="marker:text-sky-300 text-lg text-teal-300 grid grid-rows-3 grid-flow-col drop-shadow gap-y-4 gap-x-8 p-4 cursor-default">
                    <li className="group">
                        <span className="bg-left-bottom bg-no-repeat bg-gradient-to-r from-white to-white bg-[length:20%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 p-1">TypeScript</span>
                    </li>
                    <li className="group text-">
                        <span className="bg-left-bottom bg-no-repeat bg-gradient-to-r from-white to-white bg-[length:20%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 p-1">JavaScript</span>
                    </li>
                    <li className="group text-">
                        <span className="bg-left-bottom bg-no-repeat bg-gradient-to-r from-white to-white bg-[length:20%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 p-1">Angular</span>
                    </li>
                    <li className="group text-">
                        <span className="bg-left-bottom bg-no-repeat bg-gradient-to-r from-white to-white bg-[length:20%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 p-1">Vite</span>
                    </li>
                    <li className="group text-">
                        <span className="bg-left-bottom bg-no-repeat bg-gradient-to-r from-white to-white bg-[length:20%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 p-1">Next.js</span>
                    </li>
                    <li className="group text-">
                        <span className="bg-left-bottom bg-no-repeat bg-gradient-to-r from-white to-white bg-[length:20%_2px] group-hover:bg-[length:100%_2px] transition-all duration-300 p-1">React.js</span>
                    </li>
                </ul>
            </div>
    )

}

export default Tech