class OptionJoinSerializer < ActiveModel::Serializer
  attributes :id
  has_one :option
  has_one :destination
end
