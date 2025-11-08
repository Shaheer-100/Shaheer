import { useState } from 'react'
import './App.css'
import Google from './assets/Google.svg.webp'



function App() {
  const [search, setSearch] = useState('')
 const handleVoice = () => {
  window.open('https://search.google/intl/en-IN/ways-to-search/voice/', '_blank');
  console.log('voice searching')
 }
 const handleLens =() => {
  window.open('https://share.google/laF7iKDVUtRxFeQHM','_blank')
  console.log('Lens searching')
 }
  const handleGoogleSearch = () => {
if(search.trim()){
  console.log(search,'-Searched.............')
  window.open(`https://www.google.com/search?q=${encodeURIComponent(search)}`,'_blank') //for Dynamic google searches huuuuuuu yaaaaaah!!!!!!
} else {
  console.log('Void search Nahhhhhhhh...')
}
};
  
  const handleImFeelingLucky =()=>{
    if(search.trim()) {
      console.log('Feeling Lucky Activated!', {searchTerm: search}) //search term technique from my tutor
      window.open(`https://www.google.com/search?q=${encodeURIComponent(search)}&btnI=1`,'_blank')
    } else {
       console.log('Void Turn Nahhhhhhhh...')
    }
  };
  const handleKeyPress =(e) => {
    if (e.key === 'Enter')
       handleGoogleSearch(); 
      console.log('Searching............')
    } 
 
  return (
    <>
   
      <div className='container'>
        <img src={Google} alt="Google Logo" className='img' />

          <input type="text" placeholder="Search Google or type a URL" className="input" value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress ={handleKeyPress} />
         
          <div className='invincible-voice-overlay' onClick={handleVoice} title='Search by voice'>
            </div>
            <div className='invincible-lens-overlay' onClick={handleLens} title='Search by image'>
            </div>
           <div className='search-btn-ctr'>
           <button className='search-btn' onClick={handleGoogleSearch}>Google Search</button>
               <button className='feeling-lucky' onClick={handleImFeelingLucky}> I'm Feeling Lucky</button>
           </div>

         
       
         </div>
       
      
    </>
  )
}

export default App
