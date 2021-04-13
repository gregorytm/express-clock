### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
- JWT are JSON WEB TOKENS also known as jots are a way to share validaters across sites and services.  JWTS consist of a payload of data and a signature.

- What is the signature portion of the JWT?  What does it do?
- The payload is to verify where it came from and untampered with along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
- The payload is not saved in normal type but bay64 type so it would need to be translated first.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
- Server side has a sercte token stored in a file somewhere(config.js).   A GET request comes in, a JWT is created and sentn to the user side.  The token, payload and sigature come in and are saved to a variable.  THen when a another request is snet it is sent back to the server where the cycle starts over.

- Compare and contrast unit, integration and end-to-end tests.
- Unit testing is done is done for individual routes and functions.  Unit tests, test one unit of code.  Integration tests how chuncks of code work togeather, a group of functions.  End to end tests test everything the user might do from first gtetting to your website to when they leave.  Unit tests and inegration tests are more common as developers ususally want to test the important functions specifically.  End to end tests are less common, often requireing writing much more code and difficule to maintain.  Most often end to end testing is done by QA testesrs.

- What is a mock? What are some things you would mock?
- Mock is when u fake or simulate other functions or data around the function that is currently being tested.  Often it is easier to mock up the envirmonet that around a function call than running all integrated functions and data

- What is continuous integration?
- Continuous integration is the process of updateing code when builds are complete and pass testing as apposed to pushing a bunch of data all at once when everything is completed.

- What is an environment variable and what are they used for?
- Enviroment variables are unique to each computers users settings.  It can be used to effect the way the user runs functions or the commands they type in.

- What is TDD? What are some benefits and drawbacks?
- TDD is Test Driven Development.  It means the developer writes the tests first, this requires the developer to think through the development process first.  The drawbacks are testing can be tricky, some developers dont like doing it and it can slow down the development process if everyone is just writing tests in the start.

- What is the value of using JSONSchema for validation?
- It is useful for ensuring the quality fo data being stored to database and to generate useful errors if things go wrong.

- What are some ways to decide which code to test?
- Important things that users will be doin, such as CRUD type stuff in the app.

- What are some differences between Web Sockets and HTTP?
- HPPT is stateless and requires a request to be made to update info on the page.  Web Sockets are stateful and acts like a "tunnel" between the backend and the frontend.  Websockets are active open channels.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
- I do not really know yet.  I like that Flask requires less characters over JS.  And has great buit in error handling and modern features.  I like Node becuase there is a lot more documentation on it and because JS feels more familiar to code in at times.
