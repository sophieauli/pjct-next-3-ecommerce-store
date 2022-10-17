require('dotenv-safe').config({
  path: './.env',
  allowEmptyValues: true,
});
// this way we don't commit the value, only the key and also change it in the databasUrl:

module.exports = {
  extends: ['@upleveled/upleveled'],
  plugins: ['@ts-safeql/eslint-plugin'],
  rules: {
    '@ts-safeql/check-sql': [
      'error',
      {
        connections: [
          {
            databaseUrl: `postgres://${process.env.PGUSERNAME}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/@${process.env.PGDATABASE}`,
            tagName: 'sql',
            fieldTransform: 'camel',
            transform: '${type}[]',
          },
        ],
      },
    ],
  },
};
