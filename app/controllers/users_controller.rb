class UsersController < ApplicationController
	def show
		@profile_user = User.find(params[:id])
	end

	def recommendations
		skill_names(current_user)
		matched_skills = Skill.where(name: @skill_names)
		recommendations = matched_skills.users
		render json: recommendations.as_json(include: [:skills, :desired_skills])
	end

	def details
		user = User.find(params[:id])
		render json: user.as_json(include: [:skills, :desired_skills, :reviews])
	end

	private
	def skill_names(user)
		@skill_names = []
		user.desired_skills.each do |skill|
			@skill_names << skill.name
		end
	end
end
