

import Crousal from './Crousal'
import Filter from './Filter';

import Cards from './Cards';






function Home() {

  return (
    
    <div className='h-full bg-dark font-poppins pt-16'>
      
    
     <Crousal/>
     <Filter/>
     <div className='flex flex-wrap mx-auto pb-20 lg:w-[1250px] '><Cards className=""/>
     <Cards className=""/>
     <Cards className=""/>
     <Cards className=""/>
     <Cards className=""/>
     <Cards className=""/></div>
     
    </div>
    
  )
}

export default Home;
