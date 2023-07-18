import { useTheme } from "@/contexts/Theme"
import { ButtonSwitch } from "./buttonSwitch"

import { GiHamburgerMenu } from 'react-icons/gi'

import { useState } from 'react'


export const Headers = () => {



    const ThemeCtx = useTheme()

    const [openMenu, setOpenMenu] = useState(false)

    const menu = () => {
        setOpenMenu(!openMenu)

        let list = document.querySelector('ul')

        if(openMenu === false){
            list?.classList.add('top-[80px]')
            list?.classList.add('opacity-100')
        }else if(openMenu === true){
            list?.classList.remove('top-[80px]')
            list?.classList.remove('opacity-100')
        }
    }

    return (
        <nav
            className="p-5 bg-transparent dark:bg-transparent  shadow md:flex md:items-center md:justify-between  n  "
        >
            <div className="flex items-center justify-between " >
                <span className="text-2xl font-[poppins]">
                    <img className="h-10 inline cursor-pointer" src="#" alt="" />
                    JonasSmendes
                </span>

                {openMenu === false &&
                    <span className="px-4 cursor-pointer mx-2 md:hidden block">
                        <img onClick={menu} className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/512/248/248917.png" alt="" />
                    </span>
                }
                {openMenu === true &&
                    <span className="px-4 cursor-pointer mx-2 md:hidden block">
                        <img onClick={menu} className="h-5 w-5" src="https://static.vecteezy.com/system/resources/thumbnails/010/156/472/small_2x/app-menu-icon-sign-symbol-design-free-png.png" alt="" />
                    </span>
                }



            </div>


            <ul className="md:flex md:items-center z-[-1]
                 md:z-auto md:static absolute bg-white dark:bg-black w-full
                left-0 ms:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100
                opacity-0 top-[-400px] transition-all ease-in">
                <li className="mx-4  my-6 md:my-0">
                    <a href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                    >
                        HOME
                    </a>
                </li>
                <li className="mx-4  my-6 md:my-0 md:-0">
                    <a href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                    >
                        SOBRE
                    </a>
                </li>
                <li className="mx-4  my-6 md:my-0 md:-0">
                    <a href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                    >
                        PROJETOS
                    </a>
                </li>
                <li className="mx-4  my-6 md:my-0 md:-0">
                    <a href="" className="text-xl hover:text-gray-500
                        dark:hover:text-gray-600 duration-500"
                    >
                        CONTATOS
                    </a>
                </li>

                <ButtonSwitch />

            </ul>



        </nav>
    )
}