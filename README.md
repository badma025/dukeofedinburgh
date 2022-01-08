# Greetings!

This document records all the changes and occurences in my DOFE skill;
programming. A changelog is included below with events and links to code and
youtube tutorials which I have been following and working on.

Prior to this, I had a background knowledge of HTML, CSS and Javascript (started programming in August) and my outcome of this entire skill
is to build a successful blog using Next.js (a frontend web technology) and Firebase (a backend web technology used to handle things like authentication, databases,
API routes, etc).

I will update this document at least once a week.

Note: these builds you see here usually have a list of dependencies (basically like utilities for your project) and this is known as the node_modules folder. I will not attach it as it is too large and is unnecessary when it is not part of the main code.

---------------------------------------------------

It is recommended:
That you install React Developer Tools to see my code being broken down in separate 
components:
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

That you download Visual Studio Code which you can use to access these files and understand 
what is going on more easily.

## CHANGELOG:

Friday, 10 December 2021
-
Created a colour palette app with React and Firebase which uses Cloud Firestore to create, read, update and delete documents
(in this case the colours) and query delete (delete on a certain condition).

### Commands I used (node.js)
- npx create-react-app colour-palette
- npm install firebase
- npm run build

Here are the YouTube videos which I used to make this happen:
- [Video 1](https://www.youtube.com/watch?v=ig91zc-ERSE&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS)
- [Video 2](https://www.youtube.com/watch?v=YpuyxBfYRT8&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS&index=2)
- [Video 3](https://www.youtube.com/watch?v=YpuyxBfYRT8&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS&index=3)
- [Video 4](https://www.youtube.com/watch?v=YpuyxBfYRT8&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS&index=4)
- [Video 5](https://www.youtube.com/watch?v=YpuyxBfYRT8&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS&index=5)

Please refer to the /colour-palette folder for the source code (it also contains comments for how the code works)
Refer to the projects/colour-palette/src folder to see how the React code compiles into regular HTML, CSS and Javascript
(which is really cool if you ask me). This is the first of many projects to come :)

This site is available on [Netlify](colour-palette-1.netlify.app)

---

Monday, 13 December 2021
-
Created a Facebook-Messenger clone with React and Firebase which allows you to send messages and have them saved on the Firebase
database (after you refresh the messages are still there)

### Commands I used (node.js)
- npx create-react-app facebook-messenger
- npm install @mui/material @emotion/react @emotion/styled (installs Material-UI for styling)
- npm install firebase
- npm i -S react-flip-move (to give the "balloon" effect when sending and receiving messages)
- npm install @mui/icons-material (installs the icons library (e.g the send icon))
- npm install -g firebase-tools (installs Firebase tooling for things like deploying to the web.
- firebase init (opens the "settings" for Firebase.)
- npm run build (creates a production build for the project (minifies the project so it can be deployed at speed))
- firebase deploy --only hosting (deploys the website!)

This project was a lot of fun to build!

This project is available [here](https://facebook-messenger-8f1b3.firebaseapp.com/)

[Link to the Youtube video](https://www.youtube.com/watch?v=KB7JEnfc7Dc)

---------------------------------------------------------------------------------

Saturday, 18 December 2021
-
Created a Netflix clone using React and Axios (used to get and send requests)

### Commands I used (node.js)
- npx create-react-app netflix-clone
- npm install axios (to send requests to the TMDB API which gets the movies)
- npm install react-youtube (to play the YouTube videos when clicking on images)
- npm install movie-trailer (to play the appropiate trailer when clicking on the image)
- npm install -g firebase-tools (installs Firebase tooling for things like deploying to the web.)
- firebase init (opens the "settings" for Firebase.)
- npm run build (creates a production build for the project (minifies the project so it can be deployed at speed))
- firebase deploy --only hosting (deploys the website!)

Refer to the projects/netflix-clone/src folder for the source code of this app.

This project is available by clicking [this link](netflix-clone-a9cd7.web.app) 

----------------------------------------------------------------------------------------------------------

Wednesday, 22 December 2021
-
Made an Amazon clone using React and Firebase (for the authentication)

### Commands I used (node.js)
- npx create-react-app amazon-clone
- npm install firebase
- npm install @mui/icons-material (gives us the SVG icons like the search icon and the basket icon)
- npm install react-router-dom (React does not allow you to create multiple page apps by default. This does (e.g /home))
- npm install react-currency-format (for currency formatting)
- npm install -g firebase-tools (installs Firebase tooling for things like deploying to the web.)
- firebase init (opens the "settings" for Firebase.)
- npm run build (creates a production build for the project (minifies the project so it can be deployed at speed))
- firebase deploy --only hosting (deploys the website!)

Refer to the projects/amazon-clone/src folder for the source code of this app.

This project is available by clicking [this link](https://clone-c8921.web.app) 

----------------------------------------------------------------------------------------------------------

Saturday, 29 December 2021
-
Learning Git and Github (version control management systems). Making and maintaining better versions of your code is very important, and for this reason, I decided to learn these web technologies. This is also where this repo is stored (github.com)

The video which I used to learn these you can click [here](https://www.youtube.com/watch?v=RGOj5yH7evk)

-------------------------------------------------------------------------------------------------------------

Monday, 3 January 2022
-
Decided to learn [Typescript]("https://www.typescriptlang.org/") (a type-safe superset of Javascript) for more robust, strict code. It was built by Microsoft and helps to detect and fix silly bugs in your code before they become big problems in production.

[Here](https://www.youtube.com/watch?v=BCg4U1FzODs) is the video which I used to learn Typescript, and the code for that video [here](https://github.com/turbofuture1/typescript/blob/main/src/index.ts)

I have [attached](https://github.com/turbofuture1/typescript) a separate Github repo for Typescript-related code.

If you are interested in learning more about Typescript, check out [this video](https://www.youtube.com/watch?v=zQnBQ4tB3ZA) which explains it really well.

Of course, with Typescript, instead of Javascript React, you have Typescript React, which can also be integrated with Next.js (what I am planning to do next).

-------------------------------------------------------------------------------

Tuesday, 4 January 2022
-
Built a React-Typescript project (simple shopping cart) using React and Typescript.

### Commands I used (node.js)
- npx create-react-app shopping-cart --template typescript (we are no longer using Javascript)
- npm install @mui/icons-material (gives us the SVG icons like the search icon and the basket icon)
- npm install styled-components @types/styled-components (for styling)
- npm install react-query (allows us to write simple query API calls to access code)
- npm install -g firebase-tools (installs Firebase tooling for things like deploying to the web.)
- firebase init (opens the "settings" for Firebase.)
- npm run build (creates a production build for the project (minifies the project so it can be deployed at speed))
- firebase deploy --only hosting (deploys the website!)

This project is available [here](https://shopping-cart-test-1.web.app/)

----------------------------------------------------------------------------------

Thursday, 6 January 2022
-
Built a Quiz app using React and Typescript.

### Commands I used (node.js)
- npx create-react-app quiz-app --template typescript (we are no longer using Javascript)
- npm install @mui/icons-material (gives us the SVG icons like the search icon and the basket icon)
- npm install styled-components @types/styled-components (for styling)
- npm install react-query (allows us to write simple query API calls to access code)
- npm install -g firebase-tools (installs Firebase tooling for things like deploying to the web.)
- firebase init (opens the "settings" for Firebase.)
- npm run build (creates a production build for the project (minifies the project so it can be deployed at speed))
- firebase deploy --only hosting (deploys the website!)

This project is available [here](https://fireblogsyt-a4d73.web.app/)


