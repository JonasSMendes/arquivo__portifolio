import { useTheme } from "@/contexts/Theme"


export const Headers = () => {

    const ThemeCtx = useTheme()

    return(
        <nav
            className="p-5 bg-slate-200 dark:bg-slate-800 shadow md:flex md:items-center md:justify-between   "
        >
            <div>
                <span className="text-2xl font-[poppins]">
                    <img className="h-10 inline cursor-pointer" src="#" alt="" />
                    JonasSmendes
                </span>
               

            </div>
            <ul>
                <li>
                    <a href="" className="
                        text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500
                          
                        "
                        >
                        Home
                        </a>
                </li>
                    
            </ul>  
        </nav>
    )
}