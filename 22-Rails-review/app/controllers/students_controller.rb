class StudentsController < ApplicationController

    before_action :current_s, only: [:show, :edit, :update, :destroy]

    def index
        @students = Student.all
    end

    def show
        @instructor = @student.instructor
    end

    def new
        @student = Student.new
    end

    def create
        @student = Student.new(s_params)

        if @student.valid?
            @student.save
            redirect_to @student #student_path(@student)
        else
            redirect_to new_student_path
        end

    end

    def edit

    end

    def update
        @student.assign_attributes(s_params)

        if @student.valid?
            @student.update(s_params)
            redirect_to student_path(@student)
        else
            redirect_to edit_student_path
        end
    end

    def destroy
        @student.destroy
        redirect_to students_path
    end

    private
    def current_s
        @student = Student.find(params[:id])
    end

    def s_params
        params.require(:student).permit(:name, :age, :major, :instructor_id) 
    end

end
