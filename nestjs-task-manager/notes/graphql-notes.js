import { ApolloServer, qgl } from "apollo-server-express"




// Defind the Query Schema
// value greeting would be type string
const typeDefs = qgl `
    type Query {
        greeting: String
    }
`
// object variable which will be the value of greeting
const resolvers = {
    Query: {
        greeting: () => 'Hello GraphQL world!'
    }
}

// then you have your ApolloServer configuration for the schema and resolver
//const server = new ApolloServer({typeDefs, resolvers}
    


