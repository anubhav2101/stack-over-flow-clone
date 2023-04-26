import { BrowserRouter as Router } from "react-router-dom";
import { useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import ChatBot from "./components/Chatbot/ChatBot";
import icon from "./assets/iconcomment.png"
import "./App.css";

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const dispatch = useDispatch() 


  useEffect(() => {
    dispatch (fetchAllQuestions())
    dispatch(fetchAllUsers())
}, [dispatch])



  return (
    <div className="App">
      <Router>
        <Navbar  />
         <AllRoutes /> 
         {isOpen ? (
          <ChatBot
          setIsOpen={setIsOpen}
          setIsVerified={setIsVerified}
          isVerified={isVerified}
          />
         ) :
         <button
         className="open-chatbot"
         onClick={() => setIsOpen((prev) => !prev)} 
         >
          <img src={icon} alt="icon" />
         </button>
        }
        
      </Router>
     
      </div>
  );
}

export default App;
