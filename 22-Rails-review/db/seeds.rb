# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Instructor.destroy_all
Student.destroy_all

i1 = Instructor.create(name: 'Vidhi')
i2 = Instructor.create(name: 'Eli')

Student.create(name:'Aaron', major: 'SE', age: 29, instructor_id: i1.id)
Student.create(name:'Wariya', major: 'SE', age: 29, instructor_id: i2.id)
Student.create(name:'Naush', major: 'SE', age: 29, instructor_id: i2.id)
Student.create(name:'Abideen', major: 'SE', age: 29, instructor_id: i2.id)
Student.create(name:'Jordan', major: 'SE', age: 29, instructor_id: i1.id)
Student.create(name:'Syed', major: 'SE', age: 29, instructor_id: i1.id)
Student.create(name:'Dummy student', major: 'SE', age: 16, instructor_id: i1.id)



