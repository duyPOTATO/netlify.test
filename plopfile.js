module.exports = function (plop) {
    plop.setGenerator('feature', {
        description: 'Create a new feature module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Feature name (e.g., profile, settings):',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/features/{{camelCase name}}/components/.gitkeep',
                template: '',
            },
            {
                type: 'add',
                path: 'src/features/{{camelCase name}}/pages/.gitkeep',
                template: '',
            },
            {
                type: 'add',
                path: 'src/features/{{camelCase name}}/api/.gitkeep',
                template: '',
            },
            {
                type: 'add',
                path: 'src/features/{{camelCase name}}/{{pascalCase name}}.js',
                templateFile: 'plop-templates/feature/Feature.js.hbs',
            },
            {
                type: 'add',
                path: 'src/features/{{camelCase name}}/{{camelCase name}}.css',
                templateFile: 'plop-templates/feature/feature.css.hbs',
            },
        ],
    });
};