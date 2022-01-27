// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
// import { CollectionCard } from './components/CollectionCard';
// import punkHead from './assets/owner/head.jpg'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Punklist } from './components/Punklist';
import { Main } from './components/Main';
import CircularProgress from '@mui/material/CircularProgress';


function App() {

  const [ punkListData, setPunkListData ] = useState([])
  const [ punkLoader, setPunkLoader ] = useState(false)
  const [ selectedPunk, setSelectedPunk ] = useState(0)

  

  useEffect(() => {
    
      const getNftValues = async () => {
       try{
        setPunkLoader(false)
        const values = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3BE078E04eEE399310d4f5a90C114CCa4E9875Ac&order_direction=asc')
        console.log(values.data.assets)
        setPunkListData(values.data.assets)
        setPunkLoader(true)
       } catch(e) {
          console.log(e)
       }

    }
    

    return getNftValues()

  }, [])
  return (
    <div className="app">
      <Header />
       
         { punkLoader ? <Main punkListData={punkListData} selectedPunk={selectedPunk}/> :<div style={{textAlign: "center", marginBottom: "70px"}}><CircularProgress /> </div>  }
         { punkLoader ? <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}  /> :  <div style={{textAlign: "center"}}><CircularProgress /> </div>}
            
         
      
    </div>
  );
}

export default App;
