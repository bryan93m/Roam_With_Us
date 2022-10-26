class DestinationsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show]
    before_action :set_destination, only: [:show]
    def index
        render json: Destination.all, status: :ok
    end

    def show
        render json: @destination, serializer: DestinationWithOptionsSerializer, status: :ok
    end

    private
    def destination_params
        params.permit(:id, :name, :season, :price, :description, :image_url)
    end
    def set_destination
        @destination = Destination.find_by(destination_params)
    end
end
