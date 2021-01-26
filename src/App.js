import './App.css';
import Forms from './component/Forms'
import ProgressBar from './component/Profile/ProgressBar'
import FullName from './component/Profile/FullName'
import Address from './component/Profile/Address'
import ProfilePhoto from './component/Profile/ProfilePhoto'
import NavBar from './component/Profile/NavBar'
function App() {
  return (
    < div 
    style={{  
      backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqL3WqxFnEyf5oW_kpyUnYAQD5HEcXJpN5w&usqp=CAU" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <NavBar/>
    <FullName/>
    <ProfilePhoto/>
    <Address/>
    <ProgressBar/>
    <Forms/>

    </ div>
  );
}

export default App;
