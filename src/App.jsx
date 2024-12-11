import './App.css'
import Contacts from './Contacts'
import Whiskerson from './download.jpg';
import Fluffykins from './download-1.jpg';
import Felix from './download-2.jpg';
import Pumpkin from './download-3.jpg';

function App() {

  return (
    <div className='components'>
    <Contacts
      img={Whiskerson}
      name="Whiskerson"
      phone="(212) 555-1234"
      email="mr.whiskaz@catnap.meow"
    />
    <Contacts
      img={Fluffykins}
      name="Fluffykins"
      phone="(212) 555-2345"
      email="fluff@me.com"
    />
    <Contacts
      img={Felix}
      name="Felix"
      phone="(212) 555-3456"
      email="thecat@hotmail.com"
    />
    <Contacts
      img={Pumpkin}
      name="Pumpkin"
      phone="(800) CAT KING"
      email="pumpkin@scrimba.com"
    />
    </div>
  )
}

export default App
