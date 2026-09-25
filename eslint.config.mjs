import next from 'eslint-config-next';

const config = [...next, { ignores: ['.next/**', 'node_modules/**', 'ref/**', 'scripts/**'] }];
export default config;
