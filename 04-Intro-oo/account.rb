require 'pry'

class Account
    attr_reader :owner
    # attr_writer 

    attr_accessor :balance

    @@all = [] 

    puts self #class itself

    def initialize(owner, balance = 0)
        @owner = owner
        @balance = balance

        # puts self
        @@all <<  self
    end #provided by class and called as soon as you create an object

    def printMessage
        # puts self
        puts "Welcome #{@owner}, your balance is #{@balance}"
    end

    def self.all
        puts self
        # puts @owner #skip this
        @@all
    end

    def self.findUser(owner)
    
        puts "Owner name: #{owner}"
        result = @@all.find do |acc|
                    acc.owner == owner
                end
    end

    def increaseBalance
        @balance = @balance + 5000
    end


    # def owner=(owner)
    #     @owner = owner
    # end


    # def owner
    #     @owner
    # end


end
Account.new('Vidhi', 100000)
Account.new('Syed', 1000000)
Account.new('Naush', 2000000)
Account.new('Aaron')


binding.pry
0


a = {owner: 'vidhi', balance: 100000}
b = {owner: 'ethan', balance: 500000}
