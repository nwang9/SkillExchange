class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
      has_many :skills
	has_many :reviews
	has_many :desired_skills, class_name: "Skill", foreign_key: "skiller_id"
end
