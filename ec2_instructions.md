# EC2 Instructions

This files contains the instructions to set up and configure your ec2 instance (Backend).

## 1. Connect to EC2 Instance

- If you kept your SSH public (0.0.0.0/0) then you can connect though EC2 Instance Connect. However, if you changed it to your IP address then you'll have to connect through SSH client (AWS has a set of instructions for SSH client once you click on "Connect" inside of your EC2 instance)

## 2. Install Node Version Manager (nvm) and Node.js

- The following command will install NVM. Run

```terminal
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

- Activate nvm

```terminal
. ~/.nvm/nvm.sh
```

- Reload the configuration for your terminal with

```terminal
source ~/.bashrc
```

- Install specific node versions with `nvm install vX.Y.Z`. Our project was developed on `npm -v => 11.6.1` and `node -v => v22.13.1`

```terminal
nvm install v22.13.1
```

## 3. Update system

```terminal
sudo yum update -y
```

## 4. Install Git and the project

- Install Git

```terminal
sudo yum install git -y
```

> ℹ️ If you're working with your own project, before cloning the project be sure to create a personal token from GitHub and then place it into the link along with your username, separated with a colon `<username>:<token>`

> ````terminal
> git clone https://<username>:<token>@github.com/username/repo.git```
> ````

- Clone your project

```terminal
git clone https://github.com/ValhallaAMB/dice-roller.git
```

- Navigate to project folder then to server folder

```terminal
cd dice-roller/server
```

- Install project's dependencies

```terminal
npm i
```

- Create `.env` file and copy all of the variables from `.env.example`, then populate them with the your info. The following command will create and allow editing to the file.

```terminal
nano .env
```

- Add `PORT`, `DATABASE_URL` and `ARCJET_KEY` values to the `.env` file

## 5. Generate Prisma database

- Generate prisma database

```terminal
npx prisma generate
```

- Migrate prisma database

```terminal
npx prisma migrate dev --name init
```

## 6. Install and configure NGINX

> IMPORTANT ℹ️

> Linux by default doesn't allow non-sudo users to access ports below 1024 (like 80). We'll run the app on a high port (3000) and use nginx as a reverse proxy on 80.

- Install nginx

```terminal
sudo yum install nginx -y
```

- Create and configure nginx through a new file. The following command will create `dice-roller.conf` file at this location `/etc/nginx/conf.d/`

```terminal
nano /etc/nginx/conf.d/dice-roller.conf
```

- Add this to the file

```terminal
server {
        listen 80;
        server_name ###.###.###.###; # EC2 instance public IP address. e.g. 192.0.1.1

        location / {
                proxy_pass http://localhost:3000;
                proxy_set_header Host \$host;
                proxy_set_header X-Real-IP \$remote_addr;
                proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto \$scheme;
        }
}
```

- Run nginx and start automatically on boot up

```terminal
sudo systemctl enable --now nginx
```

- Extra NGINX commands
  - NGINX status `sudo systemctl status nginx`
  - Stop NGINX `sudo systemctl stop nginx`

> Since we configured our port to 80 in our `.env`, nginx will hop in and act as our proxy server.

> ℹ️ Note: If you only added the variable `PORT=80` to your `.env` file, then you can run `npm run dev` while you're in the `server` directory. The server will run on your EC2 public IP address (the same IP address used in `dice-roller.conf`). However, make sure the URL uses HTTP, not HTTPS, e.g. http://192.0.1.1

## 7. Install PM2 (Production Process Manager for Node.js)

- Install pm2 globally

```terminal
npm i pm2 -g
```

- Set pm2 to restart automatically on system reboot:

```terminal
sudo env PATH=$PATH:$(which node) $(which pm2) startup systemd -u $USER --hp $(eval echo ~$USER)
```

- Start the application using the pm2 ecosystem configuration:

```terminal
pm2 start ecosystem.config.cjs
```

- Useful pm2 commands:
  - Stop all processes: `pm2 stop all`
  - Delete all processes: `pm2 delete all`
  - Check status of processes: `pm2 status`
  - Monitor processes: `pm2 monit`
