# Angularjs-Grunt 
AngularJs Boilerplate with grunt
> Its a kickstart for those who are looking for a nice and simple project setup in angularjs, grunt, bootsrap.


Clone this repo and install both package.json and bower.json to build a basic front-end development setup. This boilerplate was made in
requirement for a project I'm doing which was running python/Django. 


## Installation

##### Install Requirements

>_ the sass compiler needs Ruby and Sass gem_

Install Ruby for Linux(apt (Debian or Ubuntu)):
```sh
sudo apt-get install ruby-full
```

Install Ruby for Linux(yum (CentOS, Fedora, or RHEL)):
```sh
sudo yum install ruby
```

After Installing Ruby , install the Sass ruby gem.
```sh
gem install sass
```


###### Install the project files

Install Node Modules:
```sh
npm install 
```

Install Bower Components:
```sh
bower install 
```

Build the project:
```sh
grunt build 
```



## Usage example

* All of your JS and Dependancy(Angular, Bootstra,...) goes in  **_"src/js"_**,  and your SCSS/SASS goes in  **_"src/css"_**  and your HTML goes in  **_"src/partials"_**.
* During build process, the **scss** is converted to **css** and then concated, the same is for **js**, its also concated.
* The partial will be moved to **_"templates/ui"_**. 

you can always chage these directory and build process from the __Gruntfile.js__



## Contributing

1. Fork it (<https://github.com/vishnucr/cied-angularjs-grunt/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
