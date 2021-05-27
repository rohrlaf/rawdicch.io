module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name:',
      validate: (value) => {
        let message = true;
        if (!/.+/.test(value)) {
          message = console.error(
            'Missing',
            'you must define a component name',
          );
        } else if (value.length < 3) {
          message = console.error('your', `"${value}, name is too short`);
        }
        return message;
      },
    },
    {
      type: 'rawlist',
      name: 'package',
      message: 'Package:',
      choices: ['components', 'client'],
    },
  ],
  actions: () => [
    {
      type: 'add',
      path: './packages/{{package}}/src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: './generate/react-component/templates/component.hbs',
    },
  ],
};
