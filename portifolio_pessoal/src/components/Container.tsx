import { useTheme } from "@/contexts/Theme"
import { ReactNode } from "react"


export const Container = ({children} :{children: ReactNode}) => {

    return(
        <div
            className=" 
            bg-white text-black
            dark:bg-black dark:text-white"

        >
            {children}
        </div>
    )
}