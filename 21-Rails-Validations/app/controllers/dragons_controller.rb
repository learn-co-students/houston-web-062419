class DragonsController < ApplicationController

  before_action :current_dragon, only: [:show, :edit, :update, :destroy]

  def index
    @dragons = Dragon.all
    # render 'dragons/index.html.erb'
  end

  def show
    # @dragon = Dragon.find(params[:id])
    @owners = @dragon.owners
  end

  def new
    @dragon = Dragon.new
    @owners = Owner.all
  end

  def create
    @dragon = Dragon.new(dragons_params)

    # byebug
    if @dragon.valid?
      @dragon.save
      redirect_to @dragon #dragon_path(@dragon)
    else
      flash[:errors] = @dragon.errors.full_messages
      # byebug
      redirect_to new_dragon_path
    end

  end

  def edit
    # @dragon = Dragon.find(params[:id])
    @owners = Owner.all
  end

  def update
    # @dragon = Dragon.find(params[:id])
    @dragon.update(dragons_params)
    redirect_to @dragon #dragon_path(@dragon)
  end

  def destroy
    # byebug
    # @dragon = Dragon.find(params[:id])
    @dragon.destroy
    redirect_to dragons_path #'/dragons'
  end

  private
  def dragons_params
    params.require(:dragon).permit(:name, :age, owner_ids: [])
  end

  def current_dragon
    @dragon = Dragon.find(params[:id])
  end

end
