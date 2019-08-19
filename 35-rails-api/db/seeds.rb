# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Event.destroy_all

u1 = User.create(name:"Bob the builder")
u2 = User.create(name:"blue character")

Event.create(location: "Houston", user_id: u1.id)
Event.create(location: "Boston", user_id: u2.id)
Event.create(location: "Austin", user_id: u2.id)
Event.create(location: "NY", user_id: u1.id)
Event.create(location: "LA", user_id: u2.id)

