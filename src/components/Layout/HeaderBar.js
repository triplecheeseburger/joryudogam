import Header from "./Header";
import SearchButton from "./SearchButton";
import Hamburger from "./Hamburger";
import '../../styles/HeaderBar.css'
function headerBar() {
	return (
		<div className='headerBar'>
			<Hamburger />
			<Header />
			<SearchButton />
		</div>
	)
}

export default headerBar