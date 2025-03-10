import { defineField, defineType } from "sanity";

export const gallery = defineType({
    name:"Gallery",
    title:"Gallery",
    type:"document",
    fields:[
        defineField({
            name:"Image",
            type:"image",
            validation: (rule)=>rule.required(),
        }),
        defineField({
            name:"Index",
            type:"number",
            description:"Position reference to put in website",
            validation: (rule)=>rule.required(),
        })
    ]
})