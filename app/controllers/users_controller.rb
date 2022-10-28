class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create, :show]

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        render json: current_user, status: :ok
    end


    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 


    private

    def user_params
        params.permit(:name, :email, :password)
    end
end
