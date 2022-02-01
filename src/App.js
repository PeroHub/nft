// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
// import { CollectionCard } from './components/CollectionCard';
// import punkHead from './assets/owner/head.jpg'

import { useState, useEffect } from 'react'
import { Punklist } from './components/Punklist';
import { Main } from './components/Main';
// import CircularProgress from '@mui/material/CircularProgress';


function App() {

  const [ punkListData, setPunkListData ] = useState([])
  // const [ networkError, setNetworkError ] = useState(false)
  // const [ punkLoader, setPunkLoader ] = useState(false)
  const [ selectedPunk, setSelectedPunk ] = useState(0)


  const obj = {
    x: 1
  }

  const obj2 = {
    ...obj,
    x: 2
    
  }

  console.log(obj2.x)

  

  useEffect(() => {

  fetch('https://testnets-api.opensea.io/assets?asset_contract_address=0x3BE078E04eEE399310d4f5a90C114CCa4E9875Ac&order_direction=asc', {
  method: 'GET',
  header: 'Access-Control-Allow-Origin: *',
  })
   .then(response => response.json())
   .then(values => {
     console.log(values)
     setPunkListData(values.assets)
   })
   .catch(err => {
     console.log(err)
   })
    //   const getNftValues = async () => {
    //    try{
    //     const values = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3BE078E04eEE399310d4f5a90C114CCa4E9875Ac&order_direction=asc')
    //     console.log(values.data.assets)
    //     setPunkListData(values.data.assets)
        
    //    } catch(e) {
    //       console.log(e)
    //    }

    // }

    

  }, [])
  return (
    <div className="app">
      <Header />
      { punkListData.length > 0 && (
        <>
         <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
         <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}  />  
        </>
      )}
      
    </div>
  );
}

export default App;
