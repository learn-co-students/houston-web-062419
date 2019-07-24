class Dragon < ApplicationRecord
    has_many :ownerships
    has_many :owners, through: :ownerships

    validates :name, presence: true, format: { with: /\A[a-zA-Z]+\z/ }
    validates :age, presence: true, numericality: { only_integer: true, greater_than: 500  } 
end
