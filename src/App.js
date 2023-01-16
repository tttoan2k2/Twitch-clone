import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="bg-[#F7F7F8]">
            {/* Navbar */}
            <Navbar />
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />
                {/* Main */}
                <Main />
            </div>
        </div>
    );
}

export default App;
