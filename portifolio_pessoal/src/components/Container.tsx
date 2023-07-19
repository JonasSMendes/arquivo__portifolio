import { useTheme } from "@/contexts/Theme"
import { ReactNode } from "react"


export const Container = ({children} :{children: ReactNode}) => {

    const ThemeCtx = useTheme()

    return(
        <div
            data-theme={`${ThemeCtx?.theme === 'dark'? 'coffee' : 'retro'}`}
            className="  w-full
            "
        >
            {children}
        </div>
    )
}