'use client'

import { Headers } from "@/components/Header"
import { Container } from "../components/Container"
import { ButtonSwitch } from "@/components/buttonSwitch"
import { ThemeProvider } from "@/contexts/Theme"

export default function Home() {
  return (
    <ThemeProvider>
      <Container>
        <Headers />
        <ButtonSwitch/>
     </Container>
   </ThemeProvider>
  )
}
