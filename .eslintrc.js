const eslintrc = {
    extends: 'airbnb',
    plugins: ['react', 'jsx-a11y', 'import'],
    settings: {
        'import/core-modules': [
            'react',
            'react-dom',
            'react-router-dom',
            'config',
            'react-helmet',
            'prop-types',
        ],
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/forbid-prop-types': 0,
        'no-shadow': 'warn',
        'import/extensions': [
            2,
            'never',
            { 'web.js': 'never', json: 'never', css: 'always' },
        ],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'import/no-unresolved': [2, { ignore: ['antd'] }],
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
    },
    env: {
        browser: true,
    },
};

module.exports = eslintrc;