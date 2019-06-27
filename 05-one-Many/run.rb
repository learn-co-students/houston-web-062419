require 'pry'

require_relative 'user.rb'
require_relative 'tweet.rb'


user1 = User.new('Naush')
user2 = User.new('Syed')
user3 = User.new('Aaron')

tweet1 = Tweet.new('Tweet1',user1)
tweet2 = Tweet.new('Tweet2',user2)
tweet3 = Tweet.new('Tweet3',user3)
tweet4 = Tweet.new('Tweet4',user3)
tweet5 = Tweet.new('Tweet5',user3)




binding.pry
0

