import { Header } from "./layout/Header";
import './index.css'
import { SideBar } from "./layout/SideBar";
import { Footer } from "./layout/Footer";
import {MainQuiz} from "./Components/MainQuiz"
function App() {
    return(
        <>
<div className="flex flex-col h-screen">
  <Header />
  <div className="flex flex-1">
    <div className="w-3/4" id="main-content">
      <MainQuiz />
    </div>
    {/* <SideBar /> */}
  </div>
  <Footer />
</div>
        
        </>
    )
}

export default App;
