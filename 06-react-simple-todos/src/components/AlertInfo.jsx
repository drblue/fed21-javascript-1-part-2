const AlertInfo = (props) => {
	console.log("AlertInfo props:", props)

	return (
		<div className="alert alert-info">
			{props.children}
		</div>
	)
}

export default AlertInfo
