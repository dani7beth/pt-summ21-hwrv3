class Zoo < ApplicationRecord
  has_many :exhibits, dependent: :destroy
end
