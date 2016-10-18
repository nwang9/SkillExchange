class SkillsController < ApplicationController
	
	def add_skills
		category_id = Category.find_by(name: params[:category])
		skill = Skill.new(name: params[:name].downcase, skill_level: params[:skill_level], user_id: current_user.id, category_id: category_id)
		skill.save 
	end

	def add_desired_skills
		category_id = Category.find_by(name: params[:category])
		desired_skill = Skill.new(name: params[:name].downcase, skiller_id: current_user.id, category_id: category_id)
		desired_skill.save
	end
end
