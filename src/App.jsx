import { Navbar } from './components/navbar'
import { Popover } from './components/popover'
import Hero from './components/hero-content'
import LoreIntroduction from './components/lore'
import CombatSection from './components/combat-types'
import Realms from './components/realms'
import Development from './components/devlopment'
import { Footer } from './components/footer'
import './App.css'

function App() {

  return (
    <section className='flex flex-col gap-12 items-center'>
      <Navbar />
      <Popover />
      <section className='px-6 z-10 flex flex-col gap-20 sm:gap-25 md:gap-40 lg:gap-45'>
        <Hero />
        <Development />
        <LoreIntroduction />
        <Realms />
        <CombatSection />
      </section>
      <Footer />
    </section>
  )
}

export default App
