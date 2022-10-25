class Destination < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings
    has_many :option_joins
    has_many :options, through: :option_joins
end
