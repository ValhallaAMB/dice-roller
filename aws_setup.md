# AWS setup

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
   - Create a _key pair_ and save it somewhere safe (you'll need it later)
   - Enable "Allow HTTPS and HTTP". Optionally, you can change SSH from "Anywhere" to your own IP address, so that it only runs while you use your IP address
   - Then click on "Edit" in the "Network settings" section
     - Make sure you select your public subnet
     - Enable "Auto-assign public IP"
     - Create a new security group and give it a name
   - Keep everything free tier eligible and click on "Launch instance"
7. Search for **RDS** and create a database.
   - Select "Standard create" and choose "Postgres"
   - Give a name in "DB instance identifier" and "Master username"
   - Keep the database "Self managed" and either chose your password or generate one
   - Disable "Storage autoscaling"
   - No "Public access"
   - Create a new "VPC security group (firewall)" with a name and an availability zone
   - Turn off "Performance Insights"
   - In "Additional configurations"
     - Give your database a name
     - Disable automated backups
     - Disable encryption
8. Head to your VPC's security group associated with your RDS
   - Edit your inbound rules and add a new rule
     - Type = PostgreSQL, Source = Custom - YOUR_EC2_SECURITY_GROUP,
9. (Optionally) Head to your EC2's security group to set a new rule in the outbound rules
   - Type = PostgreSQL, Source = Custom - YOUR_RDS_SECURITY_GROUP
10. Form your database URL
    - `postgresql://RDS_MASTER_USERNAME:RDS_MASTER_PASSWORD@RDS_ENDPOINT:RDS_PORT/RDS_DATABASE_NAME?schema=SCHEMA` all of this information but `RDS_PASSWORD` is available in your RDS database info.
11. Set up our backend on HTTPS with **API Gateway**
    - Build REST API and give it a name.
    - Click on "Create resource"
      - Enable "Proxy resource"
      - "Resource name" = `{proxy+}`
      - Enable "CORS" and create resource
    - Select the "Any" method and hit on "Edit integration"
      - Select HTTP
      - Enable "HTTP proxy integration"
      - HTTP method = ANY
      - Endpoint URL = EC2_PUBLIC_IP_ADDRESS/{proxy} (e.g http://192.0.1.1/{proxy} - must be HTTP **not** HTTPS)
      - Click save
    - Click on "Deploy API" in the top right corner
      - Click on "New stage" and give a name of `prod`
    - Now you have an "Invoke URL" which can be found in "Stages"
12. Set up Cognito
    - Create a "User pool"
      - Application type = Single-page application (SPA)
      - Give it a name
      - Sign in option = Email
      - Required attributes = Email and Preferred_username
    - Be sure to copy
      - "User pool ID" from the overview tab
      - "Client ID" from app clients
13. Set up amplify to host your frontend
    - Create an app, log in to github, choose your repository. Ensure that you select "My app is a monorepo" and add `client` as its value.
    - We're gonna add environment variable:
      - VITE_PUBLIC_API_BASE_URL = AMPLIFY_INVOKE_URL
      - VITE_COGNITO_USER_POOL_ID = AMPLIFY_USER_POOL_ID
      - VITE_COGNITO_APP_CLIENT_ID = AMPLIFY_CLIENT_ID
14. Finally, following the [EC2 instructions](./ec2_instructions.md) to fully set up your backend
