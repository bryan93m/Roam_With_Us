class User < ApplicationRecord
    has_many :bookings
    has_many :destinations, through: :bookings
    has_many :options, through: :bookings
end
