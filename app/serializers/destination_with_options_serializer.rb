class DestinationWithOptionsSerializer < ActiveModel::Serializer
  attributes :id, :name, :season, :price, :description, :image_url
  has_many :options
end
