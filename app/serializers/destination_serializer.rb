class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :season, :price, :description, :image_url
end
