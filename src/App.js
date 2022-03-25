import './App.css';
import Profile from './Profile/Profile';

function App() {
  const Userdata={Fullname:"Adele",Bio: "Adele Adkins, dite Adele, née le 5 mai 1988 à Tottenham, est une auteure-compositrice-interprète britannique." ,Profession:"chanteuse"}
  return (
    <div className="App">
      <Profile Fullname="Adele" Bio= "Adele Adkins, dite Adele, née le 5 mai 1988 à Tottenham, est une auteure-compositrice-interprète britannique." Profession="chanteuse">
<img src='https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2021-11/adelerobe.jpg' alt='Adele'/>
      </Profile>
    </div>
  );
}

export default App;
