# dice-roller

Dice roller is a simple project at its core. However, it utilizes a variety of tools such as, AWS, Vite+React, Zustand, Node.js, Prisma, Postgres, and many more.

## Installation 

### AWS setup


> ℹ️ All of the following AWS configuration are for the free tier 

1. Sign in/up into AWS console
2. Create a new **VPC** with the following settings
    - IPv4 CIDR: 10.0.0.0/16
    - Leave the rest as the default free configuration and hit create VPC
3. Click on **Subnets** inside of your VPC and create one
    - Make sure to select your VPC
    > We need 3 subnets for our VPC: 1 public and 2 private
    - Give your public subnet a name. E.g. "name_public_subnet"
        - Select your availability zone. Preferably a place near your location
        - IPv4 subnet CIDR block: 10.0.0.0/24 
    - Create two other subnets for your private subnet. E.g. "name_private_subnet" and "name2_private_subnet"
        - The private subnets should be in different amiability zones. One of them can be identical to the public and the other can be anywhere else. 
        - CIDR block: first private subnet "10.0.1.0/24" second private subnet "10.0.2.0/24"
4. Create a **Internet Gateway**, give it a name, and attach it to your VPC
> ℹ️ Currently all of your subnets are connected to 1 route table, but we need our public and private subnets to be associated with their own route tables respectively.
5. Create **Route Table**
    - First create a route table for our public subnet and attach it to your VPC
        - On the top right of your new public route table, click on **Actions** and select **Edit subnet associations**.
        - Check your public subnet and save association
        - THE NEXT STEP IS ONLY FOR YOUR PUBLIC ROUTE TABLE:
            Edit routes inside of your public route table. Add a route with a destination of "0.0.0.0/0" to allow internet access. 
    - Then perform the same actions twice for each of your private subnets
6. Search for **EC2** inside of AWS console, select instances from the sidebar and click on "Launch instance"
    - Give it a name
    - Create a *key pair* and save it somewhere safe (you'll need it later)
    - Click on "Allow HTTPS and HTTP". Optionally, you can change SSH from "Anywhere" to your own IP address 
    - Then click on "Edit" in the "Network settings" section
        - Make sure you select your public subnet
        - Enable "Auto-assign public IP"
        - Create a new security group and give it a name
    - Keep everything free tier eligible and click on "Launch instance"
7. 




### Backend setup 

1. Move into `server` folder
2. Run `npm i` in the terminal to install node dependencies 
3. Change the name of `.env.example` to `.env` and populate the empty variables with your information.
    - Optionally, remove the variable `ARCJET_ENV=development` inside `.env` to switch to a production environment 
4. Run `npm run dev` to run the server

### Frontend set up

1. Move into `client` folder
2. Run `npm i` in the terminal to install node dependencies 
3. Change the name of `.env.example` to `.env` and populate the empty variables with your information.
4. Run `npm run dev` to run the client