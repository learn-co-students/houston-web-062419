class Patient

    attr_accessor :name, :number

    @@all = []

    def initialize(name,number)
        @name = name
        @number = number

        @@all<<self
    end

    def self.all
        @@all
    end

    def appointments
        Appointment.all.select do |appointment|
            appointment.patient == self
        end
    end

    def doctors
        appointments.map do |a|
            a.doctor
        end
    end

end
