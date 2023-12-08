import Header from './components/Header'
import  Warning  from './components/Warning'
import { ChakraProvider } from '@chakra-ui/react'
import Hamkorlar from './components/Hamkorlar'
import ImgBg from './components/ImgBg'
import Honimlar from './components/Honimlar'
import Erkaklar from './components/Erkaklar'
import FeatureCards from './components/FeatureCards'
import VideoPlayer from './components/VideoPlayer'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="w-full font-body">
    

      <Warning/>
      <Header />
      <Hamkorlar/>
      <div className="max-w-[1345px] mx-auto">
        <ImgBg />
        <Honimlar />
        <Erkaklar />
        <FeatureCards />
        <VideoPlayer/>
      </div>
     <Footer/>
    </div>
  )
}

export default App
