class Home extends React.Component {

	constructor() {
		super();
		this.state = {
			recommendations: [ ],
			skills: [ ],
			desired_skills: [ ]
		}
	}

	componentDidMount() {
		fetch('/recommendations')
		.then((response) => response.json())
		.then((json) => {
			this.setState({recommendations: json,
		        	skills: json.skills,
		        	desired_skills: json.desired_skills
		}
	}


	render() {
		return(
		<div>
		<h1>Welcome to Skill Exchange</h1>
		<body>
		
		< UserRecommendations recommendations={this.state.recommendations} />
		</body>
		</div>
		)
	}
	
}