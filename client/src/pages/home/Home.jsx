
import Navbar from "./../../components/homeComponents/navbar/Navbar"
import Banner from "./../../components/homeComponents/banner/Banner"
import Box from "./../../components/homeComponents/box/Box"
import PracticeCorner from "./../../components/homeComponents/practicecorner/PracticeCorner"
import SessionCorner from "./../../components/homeComponents/sessioncorner/SessionCorner"
import Features from "./../../components/homeComponents/features/Features"
import Footer from '../../components/homeComponents/footer/Footer'
import Quesparam from '../../components/homeComponents/param/Quesparam'
import Quespaper from '../../components/homeComponents/paper/Quespaper'





const Home = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      
      <PracticeCorner></PracticeCorner>
      <SessionCorner></SessionCorner>
      <Box></Box>
      <Quesparam></Quesparam>
      <Quespaper></Quespaper>
      <Features></Features>
      <Footer/>
     
    </div>
  )
}

export default Home
