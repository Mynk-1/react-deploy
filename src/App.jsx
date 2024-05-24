
import Navbar from './components/Navbar'
import Crousal from './components/Crousal'
import Filter from './components/Filter';
import BottomNavbar from './components/BottomNav';
import Cards from './components/Cards';




function App() {
  

    
        const screenWidth = window.screen.width;
       const screenHeight = window.screen.height;

  return (
    
    <div className=' bg-dark font-poppins'>
      
     <Navbar/>
     <Crousal/>
     <Filter/>
     <div className='flex flex-wrap mx-auto pb-20 lg:w-[1250px] '><Cards className=""/>
     <Cards className=""/>
     <Cards className=""/>
     <Cards className=""/>
     <Cards className=""/>
     <Cards className=""/></div>
     <BottomNavbar />
    </div>
    
  )
}

export default App
