import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
  const authState = useSelector((state)=>{
      return state.auth.isAuthed;
  })
  console.log(authState)
  return (
    <>
      <Header />
      {authState ? <UserProfile/> : <Auth />} 
      <Counter />
    </>
  );
}

export default App;
