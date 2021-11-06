🤞👌 DIRECTIVES 👌🤞

We're almost done with the basics about Angular,

we learned a lot about components, the basic building block of any Angular app, about how it starts the

app, how we can communicate with our templates in our components so that we can output data or react

to events,

now there is one other key building block you probably use in any Angular app you build, directives.

What are directives? Directives are instructions in the DOM

and we actually already use directives without knowing it,

components are kind of such instructions in the DOM. Once we place the selector of our component somewhere

in our templates,

at this point of time we're instructing Angular to add the content of our component template and the

business logic in our TypeScript code in this place where we use the selector.

This was our instruction, Angular

please add our component in this place and indeed components are directives but directives with a template,

there are also directives without a template.

So an example would be the appTurnGreen directive which would be a custom directive we could build.

We typically add directives with an attributes selector

but technically the selector of a directive can be configured just like the selector of a component,

so you could also use CSS classes or the elements style

but again typically use the attribute style

and on this paragraph, this directive might simply color the text green you could say. So Angular would

find this instruction, here we would have defined our directive with the directive decorator to inform

Angular that this class holds a directive

and there, we might have the logic to turn this green.

Now we will learn how to write our own directives in the section focused on directives in this course

but there are a couple of built-in directives which are really useful.

Let's take a closer look at how we use them and what they do for us in the next lectures.
