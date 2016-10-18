class UserPage extends React.Component {
	constructor() {
		super();
		this.state = {
			details: [],
			skills: [],
			desired_skills: [],
			reviews: []
		}
	}
	componentDidMount() {
		fetch('/details')
		.then((response) => response.json())
		.then((json) => {
			 this.setState({details: json,
		        	skills: json.skills,
		        	desired_skills: json.desired_skills,
		        	reviews: json.reviews
		}
	}

	render() {
		return(
		<div>
		<h1>Welcome to {this.props.user.first_name}'s Profile></h1>
		
		</div>
		)
	}
}