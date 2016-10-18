class Recommendation extends React.Component {
	render() {
		return(
			<div>
				<a href={`/users/` + this.props.recommendation.id}>{recommendation.first_name}</a>
				<h2>What they love to teach!</h2>
				{this.props.recommendation.skills.map((skill, i) => {
					return <li key={i}> {skill.name} </li>
				})}
				<br>
				<h2>What they want o learn!</h2>
				{this.props.recommendation.desired_skills.map((desired_skill, i) => {
					return <li key={i}> {desired_skill.name} </li>
				})}
			</div>
		)
	}
}