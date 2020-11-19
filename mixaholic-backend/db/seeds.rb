# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

vodka_tonic = Drink.create(name: "Vodka Tonic", description: "a cold, refreshing summer drink", image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200116-vodka-tonic-0046-landscape-pf-1580337612.jpg?crop=0.595xw:0.893xh;0.315xw,0.0510xh&resize=480:*")
margarita = Drink.create(name: "Margarita", description: "a frown drink with a citrus kick", image_url: "https://www.liquor.com/thmb/8IIRRxuU3zaz8IARR-cPlltj680=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__07__05150949__Frozen-Margarita-720x720-recipe-59566ae60c504508906963b1de69ad25.jpg")
jack_and_coke = Drink.create(name: "Jack and Coke", description: "a go-to drink for a night out", image_url: "https://drivito1.imgix.drizly.com/6c9569184ffcbf41/12b2e6a78cc9/JackCoke_Hero.png?auto=format%2Ccompress&fm=jpeg&h=440&q=25")
moscow_mule = Drink.create(name: "Moscow Mule", description: "quite the refresher, with a ginger zing", image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tanbackground-1553877785.jpg")

vodka = Ingredient.create(description: "Vodka", drink: vodka_tonic)
tonic = Ingredient.create(description: "Tonic Water", drink: vodka_tonic)
lemon_or_lime = Ingredient.create(description: "Lemon or Lime", drink: vodka_tonic)
tequila = Ingredient.create(description: "Tequila", drink: margarita)
ice = Ingredient.create(description: "Ice", drink: margarita)
salt = Ingredient.create(description: "Salt", drink: margarita)
lemon_or_lime_margarita = Ingredient.create(description: "Lemon or Lime", drink: margarita)
orange_liquer = Ingredient.create(description: "Orange Liqueur", drink: margarita)
jack = Ingredient.create(description: "Jack Daniels", drink: jack_and_coke)
coke = Ingredient.create(description: "Coke", drink: jack_and_coke)
vodka_2 = Ingredient.create(description: "Vodka", drink: moscow_mule)
lime = Ingredient.create(description: "Lime", drink: moscow_mule)
ginger_beer = Ingredient.create(description: "Ginger Beer", drink: moscow_mule)
