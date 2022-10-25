class OptionJoinsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show, :create]
    def index
        option_joins = OptionJoin.all
        render json: option_joins, status: :ok
    end

    def show
        option = OptionJoin.find(params[:id])
        render json: option, status: :ok
    end

    def create
        option_joins = OptionJoin.create!(option_join_params)
        render json: option_joins, status: :created
    end

    private
    def option_join_params
        params.permit(:option_id, :destination_id)
    end
end
