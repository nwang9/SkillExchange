
User.create(first_name: "Nico", last_name: "Wang", email: "nicowang9@gmail.com", age: '22', password:  "password")

3.times do
	User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password:  Faker::Name.name, age: rand(1..50))
end

categories = ["Music", "Sports", "Software", "Cooking", "Home Improvement", "Other"]

categories.each do |category|
	Category.create(name: category)
end

Category.all.each do |category|
	Skill.create(name: Faker::Name.name, user_id: rand(1..2) ,skiller_id: rand(3..4),  category_id: category.id)
end

User.all.each do |user|
	Review.create(title: Faker::Name.name, body: Faker::Lorem.words(6), user_id: user.id, reviewer_id: rand(1..4))
end