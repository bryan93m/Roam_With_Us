class DestinationsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show]
    def index
        render json: Destination.all, status: :ok
    end

    def show
        destination = Destination.find_by(destination_params)
        render json: destination, status: :ok
    end

    private
    def destination_params
        params.permit(:id, :name, :season, :price, :description, :image_url)
    end
end
