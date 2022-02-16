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

----------------------------------------------------------------------------------

Wednesday, 12 January 2022
-
Created a Next.js + Typescript template so that I don't have to install so many dependencies when working with Next.js.

It's on Github [here](https://github.com/turbofuture1/next-typescript).

----------------------------------------------------------------------------------

Tuesday, 18 January 2022
-
Created a simple website using the Next.js + Typescript I created earlier

The source code for this project is in a separate repo [here]("https://github.com/turbofuture1/mui")

-------------------------------------------

Monday, 24 January 2022
-
Started to build a blog using Next.js and Sanity.io which uses Typescript, ISR, page routing and Tailwind CSS.

The video is available [here](https://www.youtube.com/watch?v=I2dcpatq54o&t=10232s)

--------------------------------------

Friday, 28 January 2022
-
Finished creating a blog using Next.js and Sanity.io which uses Typescript, ISR, page routing and Tailwind CSS.

### Commands I used (node.js)
- npx create-next-app --example with-tailwindcss sanity
- npm install -g @sanity/cli       
- sanity init --coupon sonny2022  
- npm i next-sanity    
- npm install react-portable-text  
- npm i react-hook-form  
- npm i @sanity/client  

This project was delpoyed with Vercel and is available [here](https://sanity-theta.vercel.app/)

---------------------------------------------

Friday, 4 February 2022
-
Learning C++ as I am also really interested in competitive programming with websites like [Project Euler](https://projecteuler.net/)
The files can be found in the projects/C++ folder and I am using [this](https://www.youtube.com/watch?v=uhFpPlMsLzY) video to learn C++.

---------------------------------------------------------

Saturday, 6 February 2022
-
Learning Figma for web design as a website must be functional as well as aesthetically pleasing.
I am using [this](https://www.youtube.com/watch?v=jwCmIBJ8Jtc&t=14532s) tutorial here and the project can be found [here](https://www.figma.com/file/xrGhTJjuppe67YH3EU3R4X/tutorial?node-id=0%3A1)


-----------------------------------------------------------------------

Friday, 12 February 2022
-
Finished learning Figma and designed my [own](https://www.figma.com/proto/6iTN6DVlZiJABPU4E7Ojg1/websiteProject?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2) webpage. I plan to build it out after learning CSS in detail.

I have also finished learning C++ (you can find all the documents in the projects/C++ folder).

I now plan to increase my knowledge of concepts like algorithms and data structures by using websites like [CodeForces](https://codeforces.com/profile/turbofuture1). 
You can find all the solved problems in the /projects/C++/competitive-programming/CodeForces folder which has some .cpp files (source code) and .exe files (the executable file which you can use to run the program on your computer).

----------------------------------------------------------------------------------------
Tuesday, 15 February 2022
-
Learning Tailwind for creating appealing websites instead of vanilla CSS; I built a discord navbar.

Commands I used (node.js)
- npx create-next-app discord-navbar
- npm install react-icons --save

This website is available []() here.

