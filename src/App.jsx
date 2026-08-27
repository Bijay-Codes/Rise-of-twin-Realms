import { Navbar } from './components/navbar'
import { Popover } from './components/popover'
import { Hero } from './components/hero-content'
import { Introduction } from './components/intro'
import { CombatSection } from './components/combat-types'
import { Realms } from './components/realms'
import { Footer } from './components/footer'
import './App.css'

function App() {

  return (
    <section className='bg-page text-page-fg h-full px-6'>
      <Navbar />
      <Popover />
      <section>
        <Hero />
        <Introduction />
        <CombatSection />
        <Realms />
      </section>
      <Footer />
    </section>
  )
}

export default App
