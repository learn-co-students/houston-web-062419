$prompt = TTY::Prompt.new

def start
    puts 'Welcome to my APP!'
    name
end

def name
    name = $prompt.ask('What is your name?')
    puts name
    p = password
    puts "Your password is: #{p}"
    choices = %w(milk coffee tea orageJuice)
    $prompt.multi_select("Select drinks?", choices)
end


# name = prompt.ask('What is your name?')
# puts name

# choice = prompt.yes?('Do you like Ruby?')
# puts choice

# secret = prompt.mask("What is your secret?")
# puts secret

# choice = prompt.select("Choose your destiny?", %w(Scorpion Kano Jax))
# puts choice