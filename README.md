# CZ-Biohub-SF

## Tools & Technologies used: React + Django

## Instructions to run:

(Remove the db files if required)

1. Set up database if not already setup by using the following commands:
    ```shell
    python manage.py makemigrations
    python manage.py migrate

2. Run the backend server using the following code:
   ```shell
   python manage.py runserver

3. [Optional] You can test the API alone using Postman at this point. 
    Use the following JSON body for the POST request 
   ```json
    {
       "n": <input of your choice>
    }
   ```

4. You can skip manual testing the backend and jump straight to testing the full-stack application by running the following command in the frontend directory:
   ```shell
   npm start

