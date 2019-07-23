class Owner < ApplicationRecord
    has_many :ownerships, dependent: :destroy
    has_many :dragons, through: :ownerships

end
