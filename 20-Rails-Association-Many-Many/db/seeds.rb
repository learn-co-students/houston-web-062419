# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

o1 = Owner.create(name: 'Aaron')
o2 = Owner.create(name: 'Naush')

Dragon.create(name: "Tomar", age: 2055, owner_id: o1.id)
Dragon.create(name: "Dojo", age: 1905, owner_id: o1.id)
Dragon.create(name: "Naush Jr", age: 2081, owner_id: o2.id)
Dragon.create(name: "Tj", age: 3000, owner_id: o2.id)
Dragon.create(name: "Bojo", age: 5060, owner_id: o1.id)
