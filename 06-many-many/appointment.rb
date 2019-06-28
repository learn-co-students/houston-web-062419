class Appointment

    attr_accessor :doctor, :time, :duration, :patient

    @@all = []

    def initialize(doctor, patient , time, duration)
        @doctor = doctor
        @patient = patient
        @time = time
        @duration = duration

        @@all << self
    end

    def self.all
        @@all
    end


end
