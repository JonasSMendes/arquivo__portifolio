'use client'

import { Headers } from "@/components/Header"
import { Container } from "../components/Container"
import { ButtonSwitch } from "@/components/buttonSwitch"
import { ThemeProvider } from "@/contexts/Theme"
import { Body } from "@/components/Body"
import { Sobre } from "@/components/Sobre"
import { ButtonUp } from "@/components/ButtonUp"
import { Project } from "@/components/Projects"
import { Fade } from "react-awesome-reveal";
import { CustomAnimation } from "@/components/RevelFade"

export default function Home() {
  return (
    
    <ThemeProvider>  
      <div className="flex items-center justify-center">
      <Container>
        <Headers />
        <Body/>
        <Sobre/>
        <Project/>
     </Container>
     </div>
     <ButtonUp/>
   </ThemeProvider>
   
   
  )
}
