import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { CollectionCard } from './components/CollectionCard';
import punkHead from './assets/owner/head.jpg'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Punklist } from './components/Punklist';
import { Main } from './components/Main';

function App() {

  const [ punkListData, setPunkListData ] = useState([])

  useEffect(() => {
    const getNftValues = async () => {
      const values = await axios.get('https://testnets-api.opensea.io/assets?asset')
      console.log(values.data.assets)
      setPunkListData(values.data.assets)
    }
    

    return getNftValues()

  }, [])
  return (
    <div className="app">
      <Header />
      <Main />
      <CollectionCard 
      id={0}
      name={'Bandana Punk'}
      image={punkHead}
      traits={[{value: 7}]}
      />
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
