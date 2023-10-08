import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import Tilt from "react-parallax-tilt";

const App = () => {
  return (
    <div className="bg-slate-950 w-full h-screen relative overflow-hidden flex flex-col justify-center items-center font-serif">
      <div className="h-[40rem] w-[40rem] bg-gradient-to-l from-green-300 to-blue-600 rounded-full animate-spin absolute right-1/2 blur-lg -top-96 opacity-60"></div>
      <div className="h-[40rem] w-[40rem] bg-gradient-to-l from-violet-700 to-red-500 rounded-full animate-spin absolute blur-lg -right-1/3 top-40 opacity-60"></div>
      <div className="h-[40rem] w-[40rem] bg-gradient-to-l from-green-300 to-blue-600 rounded-full animate-spin absolute right-1/2 blur-lg -top-96 opacity-60"></div>
      <div className="h-[40rem] w-[40rem] bg-gradient-to-l from-violet-700 to-red-500 rounded-full animate-spin absolute blur-lg -right-1/3 top-40 opacity-60"></div>
      <Tilt>
        <div className="h-96 w-96 bg-slate-50 bg-opacity-30 border border-r-0 border-opacity-30 backdrop-filter backdrop-blur-xl border-b-0  rounded-xl shadow-sh relative z-2">
          <UserContextProvider>
            <Login />
            <hr />
            <Profile />
          </UserContextProvider>
        </div>
      </Tilt>
    </div>
  );
};

export default App;
