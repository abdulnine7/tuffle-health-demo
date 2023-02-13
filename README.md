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

3. Start the Server in dev mode
```bash
npm run dev
```

4. Or Start the Server in Regular mode
```bash
npm run start
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
        }


#### Testing the server:

After you have setup the project and installed the dependencies, you can test the API endpoints with the following command,

```bash
npm run test
```


#### Author:
Abdul Noushad Sheikh
San Diego State University
asheikh9725@sdsu.edu
www.abdul.co.in

###### My other NodeJS live project on Restful API &#8595;

1. www.2minutejson.com 
    >Built this API server for JOSN data transfer using OTP, used for www.webnotes.ml
2. www.jobsexplorer.in 
    >Old and Unmaintained, so few things might not work not as this is based on Web Scrapping to JSON API

You can also see my frontend designing skills from my website www.abdul.co.in 

Github: @abdulnine7