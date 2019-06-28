require 'pry'


require_relative 'doctor.rb'
require_relative 'appointment.rb'
require_relative 'patient.rb'


d1 = Doctor.new('Dr. House', 12345678378)
d2 = Doctor.new('Dr. Jekyll', 5353548536)


p1 = Patient.new('John doe',13855853833)
p2 = Patient.new('Joey',1555853833)


a1 = Appointment.new(d1, p1, '12PM', '30 mins')
a2 = Appointment.new(d1, p2, '2PM', '30 mins')
a3 = Appointment.new(d2, p1, '11AM', '30 mins')




binding.pry
0

