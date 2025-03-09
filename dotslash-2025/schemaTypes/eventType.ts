import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name:"Events",
    title:"Events",
    type:"document",
    fields:[
        defineField({
            name:"Title",
            type:"string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Description",
            type:"string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Date",
            type:"date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Poster",
            type:"image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Registration_Link",
            type:"url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"Featured",
            type:"boolean",
            validation: (rule) => rule.required(),
            description:"Add featured tag to event"
        }),
        defineField({
            name:"Large",
            type:"boolean",
            validation: (rule) => rule.required(),
            description:"Display the event along with poster in home page"
        }),
    ]
});