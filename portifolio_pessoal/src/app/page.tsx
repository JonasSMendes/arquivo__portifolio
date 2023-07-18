'use client'

import { Headers } from "@/components/Header"
import { Container } from "../components/Container"
import { ButtonSwitch } from "@/components/buttonSwitch"
import { ThemeProvider } from "@/contexts/Theme"
import { Budy } from "@/components/Body"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex items-center justify-center">
      <Container>
        <Headers />
        <Budy/>
     </Container>
     </div>
   </ThemeProvider>
  )
}
