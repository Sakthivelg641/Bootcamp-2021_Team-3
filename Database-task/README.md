Objective:
Should be able to install and configure a database.
Should be able to understand a scenario and create data models and create respective tables.
Should be able to use a console/interface/API to insert data and retrieve data from a database. 
Should be able to understand the performance implications including
Data volume 
Configuration
Tuning


Task:
Install a database of your choice (PostgreSQL Or MariaDB)
Create a data model for the use case given below. After that create tables for the respective data model.
Build an API to insert data and another to retrieve data from the database.
Make 5 relevant queries to retrieve the data (from single table/multiple tables using join - both types should be there) and apply the same queries at the data volume intervals of 100, 1000, 10000, 1L, 10L, 1Cr and note down the response time.
(Note1: Only note down the average response time for each query - Hit the database with the same query for 5 times and take the average of the response times.
Note 2: Use Jmeter/locust.io and use Insert API to create the necessary data volume. Ensure that each record inserted has unique identifiers as mandated by the use case. )
Start indexing tables from 10L onwards and do step 4 again for the indexed data.
Apply query tuning and do step 4 again.
Apply changes in DB configuration and do Step 4 again.
Do Load Testing using Jmeter/Locust





Use Case: Health Record
Application would have 3 users. Hospital, Individual and Admin
Hospital registers itself on the application and would generate a login for themselves. Hospital on registration would get a unique hospital code
Hospital would add an individual's record entry
Every treatment transaction becomes a record. For example : 
James visited Apollo Hospital, Bengaluru for vaccination of COVID 19 and total cost was 780 
Nathalie was admitted to BMH Hospital, Mysuru and underwent bypass surgery and total cost was 175000
Simhendran visited Kantilal Hospital, Allahabad and donated B+ve blood 
All the registered hospitals would be able to fetch and retrieve these record history whenever they search an individual’s records through their Unique Identification Code (Can be Aadhaar Card Number) 
Even an individual can search and view their health record by entering their UIC
Application should be completely secure that only authorised user from hospital would be able to login and access the application 
Only the individual himself would be able to get retrieve their record and no one else has access to it
Applications can initially have text based entries for treatment and later it would be good to add medical synopsis, discharge summary, hospital bills, prescribed medicines and patient summary as documents to the application.


INFERENCE:

Compile your
Observations and 
Analysis and interpretation(inferences) 
Present the summary of the work, observation, inferences and learnings. 

