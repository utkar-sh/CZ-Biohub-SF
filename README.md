# CZ-Biohub-SF

Tools & Technologies used: React (chosen because of willingness to learn new framework) + Django (chosen because of prior familiarity)

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

NOTE: 

1. The backend application code has been inspired from a backend Python service I designed for an academic project using Python Flask. Some of the code snippets like REST calls have been reused. 
2. Frontend code using React has been based on my research on the internet[1][2] and reusing components found on internet using StackOverflow.
3. To make the backend work well with frontend and especially figuring out routing, I utilized ChatGPT. The CORS issue was discovered from same and fix was discovered using ChatGPT.

Future Extensions:

1. I haven't handled edge cases like limiting the size of input.
2. There is a scope to add CI/CD workflow for error checking and better development practices.
