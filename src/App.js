import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Courses from './components/Courses'
import Offer from './components/Offer'
import Contact from './components/Contact'
import Footer from './components/Footer'




import logo from './assets/logo.png'
import menu from './assets/menu.png'
import about from './assets/about.png'
import pic1 from './assets/pic-1.png'
import pic2 from './assets/pic-2.png'
import pic3 from './assets/pic-3.png'
import course from './assets/course.png'
import offer from './assets/offer.png'
import contact from './assets/contact.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'


import './App.css';
import Feature from './components/Feature'

function App() {
  return (
    <>
      <Header logo={logo}/>
      <Navbar menu={menu}/>
      <About about={about}/>
      <Feature pic1={pic1} pic2={pic2} pic3={pic3} />
      <Courses course={course}/>
      <Offer offer={offer} />
      <Contact contact={contact}></Contact>
      <Footer logo={logo} facebook={facebook} instagram={instagram} twitter={twitter} linkedin={linkedin} ></Footer>
    </>
  );
}

export default App;
