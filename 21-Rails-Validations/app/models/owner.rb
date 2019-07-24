class Owner < ApplicationRecord
    has_many :ownerships, dependent: :destroy
    has_many :dragons, through: :ownerships

    validates :name, presence: true, format: {with: /\A[ a-zA-Z]+\z/}
end
