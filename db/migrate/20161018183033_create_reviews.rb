class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
	t.string :title, null: false
    	t.text :body, null: false
    	t.integer :user_id
    	t.integer :reviewer_id
      t.timestamps null: false
      t.timestamps
    end
  end
end
