class Exhibit < ApplicationRecord
  belongs_to :zoo
  has_many :animals, dependent: :destroy
end
