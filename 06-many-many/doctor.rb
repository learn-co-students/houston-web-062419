class Doctor

    attr_accessor :name, :number

    @@all = []

    def initialize(name, number)
        @name = name
        @number = number
        
        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        Appointment.all.select do |appointment|
            appointment.doctor == self
        end
    end

    def patients

        # app = appointments

        # self.appointments.map do |a|
        #     a.patient
        # end

        appointments.map do |a|
            a.patient
        end


    end


end
