require 'pry'
require_relative './customers'
require_relative './banks'
require_relative './accounts'


c1 = Customer.new('Charles',3662631689)
c2 = Customer.new('Charlecatt', 83392569366)
c3 = Customer.new('Charles Hitt', 37233643464)

b1 = Bank.new('WM')
b2 = Bank.new('JPM')
b3 = Bank.new('Charles schwab')

a1 = Account.new(c1, b1,3000 )
a2 = Account.new(c1, b2,2000 )
a3 = Account.new(c2, b3,5000 )
a4 = Account.new(c3, b3,8000 )
a5 = Account.new(c3, b1,10000 )



binding.pry
0