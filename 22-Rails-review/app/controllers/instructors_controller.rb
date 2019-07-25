class InstructorsController < ApplicationController

    before_action :current_instructor, only: [:show, :edit, :update, :destroy]

    def index
        @instructors = Instructor.all
    end

    def show
    #    current_instructor
        @students = @instructor.students
    end

    def new
        @instructor = Instructor.new
    end

    def create
        @instructor = Instructor.new(i_params)

        if @instructor.valid?
            @instructor.save
            redirect_to instructor_path(@instructor)
        else
            redirect_to new_instructor_path
        end

    end

    def edit

    end

    def update
        @instructor.update(i_params)
        redirect_to instructor_path(@instructor)
    end

    def destroy
        @instructor.destroy
        redirect_to instructors_path
    end

    private
    def current_instructor
        @instructor = Instructor.find(params[:id])
    end

    def i_params
        params.require(:instructor).permit(:name)
    end
end
