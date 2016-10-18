class UserRecommendations extends React.Component {
	render() {
		return(
		<div>
		<h1> Recommended for You</h1>
		{this.props.recommendations.map((recommendation, i)=> {
			return <Recommendation key={i} theRec={recommendation} />
		})}
		</div>
		)
	}


}