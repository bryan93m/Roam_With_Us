class BookingsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show]

    def index
        booking = current_user.bookings.all
        render json: booking, status: :ok
    end

    def show 
        booking = Booking.find(params[:id])
        render json: booking, status: :ok
    end

    def create
        @booking = current_user.bookings.create!(booking_params)
        render json: @booking, status: :created
    end

    def destroy
        @booking = current_user.bookings.find(params[:id])
        @booking.destroy
        render json: {}, status: :no_content
    end

    private
    def booking_params
        params.permit(:user_id, :destination_id, :option_id)
    end
end
