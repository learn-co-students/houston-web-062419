Author.destroy_all
Book.destroy_all
Movie.destroy_all
Actor.destroy_all
Character.destroy_all

GoogleBooks::Adapter.new("Madeline L'Engle").fetch_books
GoogleBooks::Adapter.new("Stephen King").fetch_books


a1 = Actor.create(name: 'Aaron')
a2 = Actor.create(name: 'Naush')

m1 = Movie.create(title: 'The life of Naush')
m2 = Movie.create(title: 'The life of Aaron')

c1 = Character.create(movie_id: m1.id, actor_id: a1.id, name: 'Naush')
c2 = Character.create(movie_id: m1.id, actor_id: a2.id, name: 'Naush Jr.')
c3 = Character.create(movie_id: m2.id, actor_id: a1.id, name: 'Aaron III')
c4 = Character.create(movie_id: m2.id, actor_id: a2.id, name: 'Real Aaron')




