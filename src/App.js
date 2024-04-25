import Navbar from "./components/Navbar.js"
import Categories from "./components/categories.js"
import Recommended from "./components/Recommended.js"
import Topics from "./components/Topics.js"
import Popular from "./components/Popular.js"
import Footer from "./components/Footer.js"
import Saleimage from "./components/saleimage.js"


function App(){
    return(
        <>
        <Navbar></Navbar>
<Categories></Categories>
<Saleimage></Saleimage>
<Recommended></Recommended>
<Topics></Topics>
<Popular></Popular>
<Footer></Footer>
        </>
    )
}
export default App