import AboutMe from "./components/About/About"
import Cases from "./components/Case/Cases"
import Classes from "./components/Classes/Classes"
import Education from "./components/Education/Education"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Price from "./components/Price/Price"
import Reviews from "./components/Reviews/Reviews"
import Work from "./components/Work/Work"
import ScrollToTopButton from "./assets/helpers/scrollToTop/ScrollToTop"

function App() {

  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <Work />
      <Cases />
      <Classes />
      <Reviews />
      <Education />
      <Price />
      <ScrollToTopButton />
    </>
  )
}

export default App
