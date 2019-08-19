class Api::V1::EventsController < ApplicationController
    def index
        @events = Event.all
        render json: @events, only: [:id, :location], include: :user
    end
end
