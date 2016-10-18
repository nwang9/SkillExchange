class Skill < ApplicationRecord
	belongs_to :user, optional: true
	belongs_to :skiller, class_name: 'User', optional: true
	belongs_to :category, optional: true
end
