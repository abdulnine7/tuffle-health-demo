# Tuffle Health Medical API
App for medical bill upload service using NodeJS and Express.

### Requirements
* Node.js and npm

#### Getting started

1. Clone the repository
```bash
git clone https://github.com/abdulnine7/tuffle-health-demo.git
```

2. Install dependencies
```bash
cd tuffle-health-demo
npm install
```

3. Start the Server
```bash
npm start
```

After these steps you can now access the API at `http://localhost:3000`

#### There are two endpoints in the API

* GET `/items`: returns a list of medical bills
* POST `/items`: creates a new medical bill
    * Example data for the POST request:
        ```json
        {
        "patientName": "Mr. Margarita McGlynn",
        "patientAddress": "6302 Lexie Land Somalia",
        "hospitalName": "Bosco - Collins",
        "dateOfService": "Thu Nov 17 2022 21:20:18 GMT-0800 (Pacific Standard Time)",
        "billAmount": "457.22"
        }```