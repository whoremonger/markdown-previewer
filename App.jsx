//import { useState } from 'react'
import './App.css'
import Markdown from './components/Markdown'
import { Theme } from '@radix-ui/themes'


function App() {
  
  return (
   
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">  
      <Markdown /> 
    </Theme>
   
  )
}

export default App
