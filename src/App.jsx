import { Navbar } from './components/navbar'
import { Popover } from './components/popover'
import { Hero } from './components/hero-content'
import { LoreIntroduction } from './components/lore'
import { CombatSection } from './components/combat-types'
import { Realms } from './components/realms'
import { Development } from './components/devlopment'
import { Footer } from './components/footer'
import './App.css'

function App() {

  return (
    <section className='px-6 flex flex-col items-center'>
      <Navbar />
      <Popover />
      <section className='px-6 z-10'>
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
