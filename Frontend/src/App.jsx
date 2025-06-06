import "./App.css";
import Logout from "./Component/Pages/Logout";
import SignIn from "./Component/Pages/SignIn";
import SignUp from "./Component/Pages/SignUp";

function App() {
  return (
    <>
      <h2>Online Exam System</h2>
      <SignUp />
      <SignIn />
      <Logout />
    </>
  );
}

export default App;
