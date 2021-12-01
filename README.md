# CSS Runtime Functions

[See examples!](https://tzachbon.github.io/css-runtime-functions/)

Made with CSS Houdini. This is my experiment with CSS Houdini and the paint API.

> Make sure your browser supports houdini [here](https://ishoudinireadyyet.com/)

CSS Properties cannot be changed dynamically and it is a bummer. Therefore a lot of people go to build-time variables and formatters with CSS preprocessor which is the most convenient solution at the moment.

I created here a nice example for a "runtime" formatter (or function if you like) that can change your runtime property dynamically. The only problem is that the solution right now is using the paint API and it could only be used on properties like "background-image" or its shorthands. 

I would really love it if something like [this](https://github.com/w3c/css-houdini-drafts/issues/1007) could exist and make our lives more simple.

## Read more
* [CSS Houdini](https://houdini.how/)
* [Stylable](https://stylable.io) (Disclaimer - I'm on this team and we are doing build-time variables with formatters :-))
* [Paint API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API)

## Let's talk

Got any questions or just wanna chat? Feel free to open an issue here or hit me up on [Linkedin](https://www.linkedin.com/) or [Twitter](https://twitter.com/tzachbonfil)
