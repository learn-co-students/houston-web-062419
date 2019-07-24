# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

o1 = Owner.create(name: 'Aaron')
o2 = Owner.create(name: 'Naush')

d1 = Dragon.create(name: "Tomar", age: 2055)
d2 = Dragon.create(name: "Dojo", age: 1905)
d3 = Dragon.create(name: "Naush Jr", age: 2081)
d4 = Dragon.create(name: "Tj", age: 3000)
d5 = Dragon.create(name: "Bojo", age: 5060)

Ownership.create(owner_id: o1.id, dragon_id: d1.id)
Ownership.create(owner_id: o2.id, dragon_id: d2.id)
Ownership.create(owner_id: o2.id, dragon_id: d1.id)
Ownership.create(owner_id: o1.id, dragon_id: d4.id)
Ownership.create(owner_id: o1.id, dragon_id: d3.id)

