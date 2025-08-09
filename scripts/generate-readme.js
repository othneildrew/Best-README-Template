const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Register custom helpers
Handlebars.registerHelper('if', function(conditional, options) {
  if (conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('unless', function(conditional, options) {
  if (!conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('eq', function(a, b, options) {
  if (a === b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

function generateReadme(configPath, outputPath = 'README.md') {
  try {
    // Use BLANK_README.md as the template
    const templatePath = 'BLANK_README.md';
    
    // Resolve paths relative to project root
    const rootDir = path.resolve(__dirname, '..');
    const fullConfigPath = path.resolve(rootDir, configPath);
    const fullTemplatePath = path.resolve(rootDir, templatePath);
    const fullOutputPath = path.resolve(rootDir, outputPath);
    
    // Read configuration
    const config = JSON.parse(fs.readFileSync(fullConfigPath, 'utf8'));
    
    // Read template (BLANK_README.md)
    const template = fs.readFileSync(fullTemplatePath, 'utf8');
    
    // Compile template
    const compiledTemplate = Handlebars.compile(template);
    
    // Generate README
    const readme = compiledTemplate(config);
    
    // Write output
    fs.writeFileSync(fullOutputPath, readme);
    
    console.log(`✅ README generated successfully: ${outputPath}`);
    console.log(`📄 Used config: ${configPath}`);
    console.log(`📋 Used template: ${templatePath}`);
    
  } catch (error) {
    console.error('❌ Error generating README:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Command line usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const configPath = args[0] || 'configs/example.json';
  const outputPath = args[1] || 'README.md';
  
  generateReadme(configPath, outputPath);
}

module.exports = { generateReadme };