import HeaderBar from "./HeaderBar";
import Footer from "./Footer";
import '../../styles/Layout.css'
function Layout({children}) {
    return (
        <div className='layout'>
           <HeaderBar />
            {children}
           <Footer />
        </div>
    )
}

export default Layout