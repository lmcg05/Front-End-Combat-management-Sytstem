# Combat Management System Frontend

Combat management system frontend used by operators to interact with data from sensors to make tactial decisions.

## Getting Started

This documentation provides instruction for development, testing as well as deployment of our CMS-FRONTEND project.  

### Prerequisites

* Link to [draw.io](https://app.diagrams.net/) in order to access the wireframe.
* A VM running Ubuntu 18.04 which allows ports 8080, 5000 as well as http and https traffic.
* Access to [CMS-Backend](https://github.com/christophperrins/CMS-backend.git) which contains the backend part of the project.  

### Installing

SSH into the VM, and then install the following items:

**1) Firstly, install Jenkins which also requires Java installation by following these steps:

```
sudo apt update
```

```
sudo apt install openjdk-8-jdk
```

* Add Jenkins to repository:

```
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
```

```
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
```

* Install Jenkins:

```
sudo apt update
```

```
sudo apt install jenkins
```

* To verify that Jenkins is running in your VM input following command:

```
sudo systemctl status jenkins
```

(On success the status should be 'Active'.)

After installation, Jenkins can be accessed by using the IP of your VM and adding ':8080' at the end.

This will take you to Jenkins site which asks for admin password. The password can be retreived by running the following command on your VM:

```
cat /var/lib/jenkins/secrets/initialAdminPassword
```

Copy and paste the password onto Jenkins. Finally install the recommended plugins and follow the steps for making your own account. 

## Running the tests

In this project, testing was implemented by ensuring all functionalities work as they should by locally hosting it before deploying.

This was done by running the project on [Visual Studio Code](https://code.visualstudio.com/download) and installing a 'Live Server' extention on Visual Studio Code. 

All html pages can then be locally hosted by opening them using live server where functionalities can be tested.

For improved testing, we suggest using [Selenium testing](https://www.selenium.dev/).   


## Deployment

The project is automated and deployed using Jenkins. To acheive this login to Jenkins and create a new freestyle project. 

In your source code add the Github link

```
git@github.com:christophperrins/CMS-frontend.git
```

Next, in Build Triggers, you can set how frequently you want the project to build using the Poll SCM option. We reccomend typing in

```
* * * * *
```

Add a build step and execute a shell. Paste in the following commands:

```
cp -rf public-html/* /var/www/html
```

Finally, apply and save the configurations. The project should now be automated and can be deployed.  

## Built With

Visual Studio Code

## Authors

* **Christopher Perrins** - *Project Lead* - [ChristophPerrins](https://github.com/ChristophPerrins)
* **Tadas Vaidotas** - *Senior Dev*


* **Elliott Dorrington** - *Frontend Team Leader* - [EDorrington98](https://github.com/EDorrington98)
* **Nicholas Overd** - *Frontend Junior Dev* - [nick-overd](https://github.com/nick-overd)
* **Douglas Miller** - *Frontend Junior Dev* - [Dougmiller94](https://github.com/Dougmiller94)
* **Ashima Ghale** - *Frontend Junior Dev* - [ashima521](https://github.com/ashima521)
* **Laurence Garcia** - *Frontend Junior Dev* - [lmcg05](https://github.com/lmcg05)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Chris Perrins, Rhys Thompson and Tadas Vaidotas for assisting and training us
* All QA trainers for their invaluable tuition and assistance
* Thank you to BAE for creating this project
