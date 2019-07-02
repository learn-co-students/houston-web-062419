class Bank
    attr_accessor :name

    @@all = []

    def initialize(name)
        @name = name

        @@all<<self
    end

    def self.all
        @@all
    end

    def accounts
        Account.all.select do |account|
            account.bank == self
        end
    end

    def customers
        accounts.map do |account|
            account.customer
        end
    end

end