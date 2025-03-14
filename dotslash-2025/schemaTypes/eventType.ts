import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name:"Events",
    title:"Events",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Event Name",
            type:"string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"description",
            title:"Event Content",
            type: "array", 
            of: [{type: "block"}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"date",
            title:"Start Date",
            type:"date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"poster",
            title:"Event Poster",
            type:"image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name:"link",
            title:"Registration Link",
            description:"Enter the URL. Leave empty if no registration is required.",
            type:"url",
        }),
        defineField({
            name:"featured",
            title:"Is it a Featured Event?",
            description:"Add featured tag to event",
            type:"boolean",
            validation: (rule) => rule.required(),
            initialValue:false,
        }),
        defineField({
            name:"large",
            title:"Display the event in with / without poster in home page?",
            type:"boolean",
            validation: (rule) => rule.required(),
            initialValue:false,
        }),
    ]
});