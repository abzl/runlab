class RemoveReviewIdFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :review_id, :bigint
  end
end
