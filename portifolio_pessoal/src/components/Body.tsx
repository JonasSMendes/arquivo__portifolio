import { useRef, useLayoutEffect} from "react"

export const Budy = () =>{

    const nameRef = useRef() 

    const typeWrite = (e:Element) => {
        const textoArray = e.innerHTML
        console.log(textoArray)
    }
    
    useLayoutEffect(()=>{
        
    })

    return(
        <div id="Home" className="flex justify-center items-center w-full h-screen ">
            <section className="flex">
                <img className="w-96 h-auto" src="/assets/logo.png" alt="" />
                <p ref={nameRef.current}>ola eu sou jonas</p>
            </section>

        </div>
    )
}