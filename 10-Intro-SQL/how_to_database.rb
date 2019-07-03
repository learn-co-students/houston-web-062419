require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')

# def input(arg1,arg2)
#     db.execute('INSERT INTO fans_returns (name,artist_id) VALUES (?,?)', arg1,arg2)
# end

# db.execute('UPDATE fans_returns SET name="VIDHI" WHERE id=6')

binding.pry
0



