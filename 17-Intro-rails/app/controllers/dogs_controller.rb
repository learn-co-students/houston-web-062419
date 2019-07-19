class DogsController < ApplicationController

  def index
    @dogs = Dog.all
  end

  def show
    # byebug
    @dog = Dog.find(params[:id])
  end

  def new 
    # byebug
    #for new form
  end

  def create
    #for creating new dog
  end

  def edit
   # for edit form for a dog
  end

  def update
    # patch/update a dog
  end

  def destroy
    #delete a dog's record
  end


end
