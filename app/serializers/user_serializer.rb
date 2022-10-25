class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :password, :password_digest
end
