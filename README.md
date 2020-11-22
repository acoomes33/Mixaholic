# README

## Mixaholic

This is a SPA (single page application) webpage that displays drinks and their corresponding information in a grid pattern. A user can create a drink, delete, and/or like a drink. A user can also sort drinks by most recently created.

## Installation

Clone this repository, cd into mixaholic-backend, enter bundle install, and start the API by using the `rails s` command. Then in the mixholic-frontend, you can run npx reload -b to run the program in your browser.

## Usage

When visiting the Mixaholic SPA application, you will see a form to create a drink where you can add a name, description, an image url, and ingredients. There is a dynamic "Add Ingredient" button that creates a new line for another ingredient if needed. Once you press the create drink button, it will automatically show up on the page along with the other drinks in the database.Other drinks that are in the database get rendered automatically when the page in rendered. When looking at a drink card, the all information is displayed, and there is a "more info" button that shows the ingredients when clicked, and can be hidden again with the "less info" button. You can also delete a drink or like a drink with their corresponding buttons. There is also a "Newest Drinks" button at the top of the page that sorts the drinks by the most recently created.



## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/acoomes33/Mixaholic. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/acoomes33/Mixaholic/blob/master/CODE_OF_CONDUCT.md).


## Code of Conduct

Everyone interacting in the Mixaholic project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/acoomes33/Mixaholic/blob/master/CODE_OF_CONDUCT.md).

