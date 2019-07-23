class Dragon < ApplicationRecord
    has_many :ownerships
    has_many :owners, through: :ownerships
end
