Author.destroy_all
Book.destroy_all


a1 = Author.create(name: 'DHH', age: 39)
a2 = Author.create(name: 'Charles', age: 25)
a3 = Author.create(name: 'Jordan', age: 23)
a4 = Author.create(name: 'author1', age: 45)
a5 = Author.create(name: 'author2', age: 25)

Book.create(title: 'title1', year: 2019, author_id: a1.id)
Book.create(title: 'title2', year: 2009, author_id: a2.id)
Book.create(title: 'title3', year: 1998, author_id: a3.id)
Book.create(title: 'title4', year: 2001, author_id: a4.id)
Book.create(title: 'title5', year: 2008, author_id: a2.id)

c1 = Character.create(name:'Joey')
c2 = Character.create(name:'Phobe')
c3 = Character.create(name:'Monica')

e1 = Episode.create(title: 'the one with Monkey')
e2 = Episode.create(title: 'the one with Chandler')
e3 = Episode.create(title: 'the one with Ross')

Appearance.create(character_id: c1.id, episode_id: e1.id)
Appearance.create(character_id: c2.id, episode_id: e1.id)
Appearance.create(character_id: c2.id, episode_id: e3.id)
Appearance.create(character_id: c3.id, episode_id: e3.id)
Appearance.create(character_id: c3.id, episode_id: e2.id)







