# Author.all should return all of the authors
# Author#books should return all of the books an author has written
# Author#write_book should take arguments of a title and word count and make a new Book instance associated with this author
# Author#total_words should return the total number of words that author has written across all of their authored books.
# Author.most_words should return the author instance who has written the most words

class Author

    attr_accessor :name

    @@all = []

    def initialize(name)
        @name = name

        @@all << self
    end

    def self.all
        @@all
    end

    def booksauthors
        BookAuthor.all.select do |bookauthor|
            bookauthor.author == self
        end
    end


    def books
        booksauthors.map do |bookauthor|
            bookauthor.book
        end
    end

    def write_book(title, word_count)
        b = Book.new(title, word_count) #creating a new book
        BookAuthor.new(b, self) #connecting the book with author
    end


    def total_words
        total = 0
        books.each do |book|
            total = total + book.word_count

            #total += book.word_count
        end

        total
    end

    def self.most_words
        # author = Author.all[0]

        # Author.all.each do |a|
        #     if author.total_words < a.total_words
        #         author = a
        #     end
        # end

        # author


        Author.all.max do |a , b|
            a.total_words <=> b.total_words
        end

    end
end

