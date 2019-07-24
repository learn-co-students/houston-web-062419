class OwnersController < ApplicationController

    before_action :current_owner

    skip_before_action :current_owner, only: [:index, :create, :new]


    def index
        @owners = Owner.all
    end

    def show
        @dragons = @owner.dragons
    end

    def new
        @owner = Owner.new
        @dragons = Dragon.all
    end

    def create
        # byebug
        @owner = Owner.new(owners_params)

        if @owner.valid?
            @owner.save
            redirect_to @owner
        else
            flash[:errors] = @owner.errors.full_messages
            redirect_to new_owner_path
        end
    end

    def edit
        @dragons = Dragon.all
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
        params.require(:owner).permit(:name, dragon_ids: [])
    end

    def current_owner
        @owner = Owner.find(params[:id])
    end

end
