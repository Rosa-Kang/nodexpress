## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── bcryptjs: used to hash passwords before we store them in our database
    ├── body-parser: used to parse incoming request bodies in a middleware
    ├── concurrently: allows us to run our backend and frontend concurrently and on different ports
    ├── express: sits on top of Node to make the routing, request handling, and responding easier to write
    ├── is-empty: global function that will come in handy when we use validator
    ├── jsonwebtoken: used for authorization
    ├── mongoose: used to interact with MongoDB
    ├── passport: used to authenticate requests, which it does through an extensible set of plugins known as strategies
    ├── passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT                 
    └── validator: used to validate inputs (e.g. check for valid email format, confirming passwords match)                     


1.  **Start developing.**

    Navigate into your server and install the dependencies as following.

    ```shell
    npm i bcryptjs body-parser concurrently express is-empty jsonwebtoken mongoose passport passport-jwt validator
    ```

2.  **Set up server with Node.js & Express**

    Your site is now running at `http://localhost:${port}`!

    _Pull in our required dependencies: __. namely Express Mongoose and bodyParser._

    _Initialize our app using express() __. ._

3.  **Set up Database Schema**