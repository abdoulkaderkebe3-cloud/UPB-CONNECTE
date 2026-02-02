import './App.css'
import Cards from './components/reuitilisable/Cards'
import Date from './components/reuitilisable/Date'
import Header from './components/reuitilisable/Header'
import ListeClasse from './components/reuitilisable/ListeClasse'
import Navigation from './components/reuitilisable/Navigation'
function App() {
  

  return (
    <>
       <Header/>
       <hr className='bg-gray-500' />
       <Date/>
      <Cards/>
      <ListeClasse/>
      <Navigation/>
    </>
  )
}

export default App
