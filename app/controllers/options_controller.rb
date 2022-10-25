class OptionsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show]

    def index
        options = Option.all
        render json: options, status: :ok
    end
end
