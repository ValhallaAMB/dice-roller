// Used by PM2 to run the server in development mode in AWS's EC2 

module.exports = {
    apps: [
        {
            name: "dice-roller",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            }
        }
    ]
}