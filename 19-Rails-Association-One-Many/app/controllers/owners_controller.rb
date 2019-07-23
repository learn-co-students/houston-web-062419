class OwnersController < ApplicationController

    before_action :current_owner, only: [:show, :edit, :update, :destroy]
    def index
        @owners = Owner.all
    end

    def show
        @dragons = @owner.dragons
    end

    def new
        @owner = Owner.new
    end

    def create
        # byebug
        @owner = Owner.create(owners_params)
        redirect_to @owner
    end

    def edit

    end

    def update
        @owner.update(owners_params)
        redirect_to @owner 
    end

    def destroy
        @owner.destroy
        redirect_to owners_path
    end
    

    private

    def owners_params
        params.require(:owner).permit(:name)
    end

    def current_owner
        @owner = Owner.find(params[:id])
    end

end
