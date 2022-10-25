class User < ApplicationRecord
    has_secure_password
    has_many :bookings
    has_many :destinations, through: :bookings
    has_many :options, through: :bookings

    validates :email, presence: true, uniqueness: true
    
end
