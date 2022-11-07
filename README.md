# Moveright

## Try it here: https://moveright.vercel.app/

---

This is a very basic Rightmove website clone I made as a front end design exercise using Next.js, TypeScript and Tailwind CSS. My aim was largely to emulate the UI, so there's very little functionality as things stand. 

A user can click on the For Sale or To Rent buttons and be taken to a search bar where they're prompted to enter a location. After they do so, they're shown a list of properties from data I stored in JSON form at https://json.extendsclass.com/bin/315eab1236da.

The list of properties will be the same every time, but they'll be displayed as being a) either for sale or rent, depending on which search input the user used, and b) in the searched-for location. These values are passed as queries using the useRouter hook.

Obviously with more time, I would have liked to draw from a larger pool of data and implemented proper search filters. I could have done this with an external API, but I wanted my data to have very specific properties in order keep it as close as possible to the real Rightmove.

[Jonny Abrams](https://github.com/jonnyabrams)