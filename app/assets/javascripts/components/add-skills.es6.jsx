class AddSkills extends React.Component {
	constructor() {
		super();
		this.state = {
			categories: [ ],
			showDesiredSkillsForm: false
		}
	this.addSkills = this.addSkills.bind(this);
	this.getDesired = this.getDesired.bind(this);
	this.addDesiredSkills = this.addDesiredSkills.bind(this);
	this.finishRegistration = this.finishRegistration.bind(this);
	}

	 componentDidMount() {
		fetch('/all_categories')
		.then((response) => response.json())
		.then((json) => {
			this.setState({categories: json})
		}
	}

	finishRegistration() {
		fetch('/')
	}
	addSkills() {
		fetch('add_skills', {
			method: 'POST',
			dataType: 'JSON'
		})
		.then((response) => {
			this.setState()
		})
	}

	addDesiredSkills() {
		fetch('add_desired_skills', {
			method: 'POST',
			dataType: 'JSON'}
		})
		.then(response) => {
			this.setState()
		}
	}

	getDesired() {
		this.setState({showDesiredSkillsForm: true})
	}

render() {
 return(
 <div>
 	{this.state.showDesiredSkillsForm ?
 	 <div>
 		<h1>Add Desired Skills</h1>

 		<form onSubmit={this.addDesiredSkills}>
 		<input type="text">Skill Name: </input>
 		<select value="category">
		      this.state.categories.map((category, i) => {
		        return <option key={i} 
		        value={category.name}>{category.name}</option>
		      })
		</select>
 		<button className="btn btn-default" type="submit">Add Desired Skill
 		</button>
 		</form>

 		<button onClick={this.finishRegistration}>Finish Registration</button>
 	</div>
 	:
 	<div>
 		<h1>Add Skills</h1>
 		<p>You can add more later on your user profile page</p>
 		<form onSubmit={this.addSkills}>
 		<input type="text">Skill Name: </input>
 		<select value="category">
		      this.state.categories.map((category, i) => {
		        return <option key={i} 
		        value={category.name}>{category.name}</option>
		      })
		</select>
 		<button className="btn btn-default" type="submit">Add Skill
 		</button>
 		</form>
 		<button onClick={this.getDesired} className="btn btn-default" type="submit">Move on to Desired Skills
 		</button>
 	</div>
 }
 </div>
 	)
}

}