import { useTheme } from "@/contexts/Theme"
import DarkImg from '../../public/assets/dark-mode.png'
import LightImg from '../../public/assets/mode.png'
import {BsSunFill} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'

export const ButtonSwitch = () => {

    const themeCtx = useTheme()

    const handleClickToggle = () =>{
        if(themeCtx){
            themeCtx.setTheme(themeCtx.theme === 'dark'? 'light' : 'dark')
        }
    }

    return(
        <div
            className=" cursor-pointer p-2 top-0
                bg-white text-black dark:bg-black dark:text-white
            "
            onClick={handleClickToggle}
        >
            {themeCtx?.theme === 'dark' &&
                <>
                light
                {BsSunFill}
                </>
            }
            {themeCtx?.theme === 'light' &&
                <>
                dark              
                {BsSun}
                </>
            }
        </div>
    )
}