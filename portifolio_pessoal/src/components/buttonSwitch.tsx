import { useTheme } from "@/contexts/Theme"
import DarkImg from '../../public/assets/dark-mode.png'
import LightImg from '../../public/assets/mode.png'

export const ButtonSwitch = () => {

    const themeCtx = useTheme()

    const handleClickToggle = () =>{
        if(themeCtx){
            themeCtx.setTheme(themeCtx.theme === 'dark'? 'light' : 'dark')
        }
    }

    return(
        <div
            className="fixed left-10 right-0 top-0 mt-2 cursor-pointer
                bg-white text-black dark:bg-black dark:text-white
            "
            onClick={handleClickToggle}
        >
            {themeCtx?.theme === 'dark' &&
                <>
                <p>Dark</p>
                <img src={`${DarkImg}`} alt="" />
                </>
            }
            {themeCtx?.theme === 'light' &&
                <>
                <p>Light</p>
                <img src={`${LightImg}`} alt="" />
                </>
            }
        </div>
    )
}