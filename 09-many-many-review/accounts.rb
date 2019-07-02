class Account

   # puts 'WELCOME!!!'
   attr_accessor :customer, :bank, :balance

   @@all = []

   def initialize(customer, bank, balance)
      # puts 'I am inside Initialize method'
      @customer = customer
      @bank = bank
      @balance = balance

      @@all << self
   end



   def self.all
      @@all
   end

end