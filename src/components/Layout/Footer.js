import '../../styles/Layout.css'
function Footer() {
	return (
		<div className='footer'>
			{process.env.REACT_APP_FOOTER_TEXT}
		</div>
	)
}

export default Footer