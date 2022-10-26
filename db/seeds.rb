# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

u1 = User.create(name: "Bryan", email: "bryan@gmail.com", password: "1234")
u2 = User.create(name: "Leela", email: "leela@gmail.com", password: "1234")

d1 = Destination.create(name: "Aspen", season: "Winter", price: 1000, description: "Skiing, Food, Lodging", image_url: "https://media.cntraveler.com/photos/5fda74245344ec5351d1fca8/master/pass/AspenColorado-2020-GettyImages-956105512.jpg")
d2 = Destination.create(name: "Big Sky", season: "Winter", price: 1500, description: "Skiing, Food, Lodging", image_url: "https://www.wilsonpeakproperties.com/custimages/Big_Sky_Resort_Winter.jpeg")
d3 = Destination.create(name: "Cancun", season: "Summer", price: 1500, description: "Beach, Food, Lodging", image_url: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_900,q_75,w_1700/v1/clients/quintanaroo/_cc911e74-049d-4172-b8d9-67b8942c9bc0.1392201394-2910bf3f5b8388c632d75b47bd71a0c94b1389b5c0b1926331aa7ed225a20103-d_640.jpg")
d4 = Destination.create(name: "Instanbul", season: "Summer", price: 2000, description: "Food, Lodging, Sightseeing", image_url: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/05/BURC_beach_700x500.jpg")

o1 = Option.create(name: "ski/snowboard lessons", price: 400)
o2 = Option.create(name: "Snow Tubbing", price: 70)
o3 = Option.create(name: "Swimming lessons", price: 100)
o4 = Option.create(name: "Surfing lessons", price: 200)

op = OptionJoin.create(option_id: o1.id, destination_id: d1.id)
op2 = OptionJoin.create(option_id: o2.id, destination_id: d1.id)
op3 = OptionJoin.create(option_id: o3.id, destination_id: d3.id)
op4 = OptionJoin.create(option_id: o4.id, destination_id: d3.id)
op5 = OptionJoin.create(option_id: o1.id, destination_id: d2.id)
op6 = OptionJoin.create(option_id: o2.id, destination_id: d2.id)
op7 = OptionJoin.create(option_id: o3.id, destination_id: d4.id)