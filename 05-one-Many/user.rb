class User

    attr_accessor :user_name

    @@all = []

    def initialize(user_name)
        @user_name = user_name

        @@all << self
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
        # Tweet.all.select {|tweet| tweet.user == self }

        # Tweet.all.each {|tweet|
        #     puts "tweets: #{tweet}"
        #     puts "I am second line"
        # }


        # Tweet.all.each do |tweet|
        #     puts "tweets: #{tweet}"
        #     puts "I am second line"
        # end
    end

    def createTweet(content)
        Tweet.new(content, self)
    end
    
    def defaultTweet
        Tweet.new('Good Morning', self)
    end

    def self.all
        @@all
    end



end