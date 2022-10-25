class OptionJoin < ApplicationRecord
  belongs_to :option
  belongs_to :destination
end
