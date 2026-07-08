import { LoadingScreen } from '@/components/LoadingScreen'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Process } from '@/components/Process'
import { Included } from '@/components/Included'
import { Faq } from '@/components/Faq'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Included />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
