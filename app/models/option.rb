class Option < ApplicationRecord
    has_many :option_joins
    has_many :bookings
    has_many :destinations, through: :option_joins
    has_many :users, through: :bookings
end
