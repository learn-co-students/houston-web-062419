class Book

# Book.all should return all of the books
# Book#authors should return the author instance who wrote this book
# Book#title should return the title of the book
# Book#word_count should return the number of words in the book

    attr_accessor :title, :word_count

    @@all = []
    
    def initialize(title, word_count)
        @title = title
        @word_count = word_count

        @@all << self
    end

    def self.all
        @@all
    end

    def booksauthors
        BookAuthor.all.select do |bookauthor|
            bookauthor.book == self
        end
    end

    def authors
        booksauthors.map do |bookauthor|
            bookauthor.author
        end
    end


end