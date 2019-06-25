require 'rest-client'
require 'pry'
require 'json'

# url = 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

# res = RestClient.get(url)

# result = JSON.parse(res)

# result['items'].each do |book|
#     puts book['volumeInfo']['title']
# end

# result['items'].each do |book|
#     puts book['volumeInfo']['authors']
# end

def getTitle(book)
    book['volumeInfo']['title']
end

def getAuthor(book)
    if book['volumeInfo']['authors']
        book['volumeInfo']['authors'].join('-')
    else
        "No author Found"
    end
end

def getBooks(term)
    url = "https://www.googleapis.com/books/v1/volumes?q=#{term}"

    res = RestClient.get(url)

    result = JSON.parse(res)
end

def printBook(title, authors)
    puts "Book title: #{title}, authors: #{authors}"
end

def userInput
    gets.chomp
    # input = gets.chomp
end


def run
    puts"Please Enter your Search Term:"
    input = userInput
 
    books = getBooks(input)

    books['items'].each do |book|
        title =  getTitle(book)
        authors = getAuthor(book)
        printBook(title, authors)
    end

end

run

# binding.pry
0





