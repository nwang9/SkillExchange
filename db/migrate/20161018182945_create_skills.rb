class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
		t.string :name, null: false
	    	t.string :skill_level
	    	t.integer :category_id
	    	t.integer :user_id
	    	t.integer :skiller_id

	      t.timestamps null: false
    end
  end
end
