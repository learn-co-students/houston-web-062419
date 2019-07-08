class Book <  ActiveRecord::Base 
    belongs_to :author

    # def authors
    #     Author.find(self.author_id)
    # end
end