require 'pry'
require_relative './book'
require_relative './author'
require_relative './book_author.rb'


b1 = Book.new('title1',3000)
b2 = Book.new('title2',5000)
b3 = Book.new('title3',7000)

a1 = Author.new('Syed')
a2 = Author.new('Naush')

bookAuthor1 = BookAuthor.new(b1,a1)
bookAuthor2 = BookAuthor.new(b1,a2)
bookAuthor3 = BookAuthor.new(b2,a2)
bookAuthor4 = BookAuthor.new(b2,a1)
bookAuthor5 = BookAuthor.new(b3,a1)





binding.pry
0