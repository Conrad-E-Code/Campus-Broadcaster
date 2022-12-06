puts "🌱 Seeding spices..." 
# Seed your database here

ny = School.create location: "New York"
co = School.create location: "Colorado"

bb = User.create username: "BillyBob", password: "qwert", school_id: ny.id
ps = User.create username: "PeggySue", password: "asdfg", school_id: ny.id
tl = User.create username: "TammyLynn", password: "zxcvb", school_id: ny.id

# Login.create password: "qwerty" username: "BillyBob" user_id: bb.id
# Login.create password: "asdfg" username: "PeggySue" user_id: ps.id
# Login.create password: "zxcvb" username: "TammyLynn" user_id: tl.id

puts "✅ Done seeding!"

#These two tables have the exact same info. Doesn't this defy the 
#do not repeat yourself coding mantra?
#I thought the only data that should be on both tables are the ids/foreign keys?
