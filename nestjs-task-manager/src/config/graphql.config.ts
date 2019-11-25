export const graphqlConfig = {
    autoSchemaFile: 'schema.gql',
    context: ({ req }) => ({ req }),
    introspection: true,
    playground: true,
  };