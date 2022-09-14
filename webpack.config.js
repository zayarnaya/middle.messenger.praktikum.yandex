const path = require('path');

/*

const HandlebarsPlugin = require("handlebars-webpack-plugin");
 
const webpackConfig = {
 
  plugins: [
 
    new HandlebarsPlugin({
      // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
      entry: path.join(process.cwd(), "app", "src", "*.hbs"),
      // output path and filename(s). This should lie within the webpacks output-folder
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(process.cwd(), "build", "[name].html"),
      // you can also add a [path] variable, which will emit the files with their relative path, like
      // output: path.join(process.cwd(), "build", [path], "[name].html"),
      
      // data passed to main hbs template: `main-template(data)`
 //////////////     data: require("./app/data/project.json"),
      // or add it as filepath to rebuild data on change using webpack-dev-server
 /////////////    data: path.join(__dirname, "app/data/project.json"),
 
      // globbed path to partials, where folder/filename is unique
      partials: [
        path.join(process.cwd(), "app", "src", "components", "*", "*.hbs")
      ],
 
      // register custom helpers. May be either a function or a glob-pattern
      helpers: {
        nameOfHbsHelper: Function.prototype,
        projectHelpers: path.join(process.cwd(), "app", "helpers", "*.helper.js")
      },
 
      // hooks
      // getTargetFilepath: function (filepath, outputTemplate) {},
      // getPartialId: function (filePath) {}
      onBeforeSetup: function (Handlebars) {},
      onBeforeAddPartials: function (Handlebars, partialsMap) {},
      onBeforeCompile: function (Handlebars, templateContent) {},
      onBeforeRender: function (Handlebars, data, filename) {},
      onBeforeSave: function (Handlebars, resultHtml, filename) {},
      onDone: function (Handlebars, filename) {}
    })
  ]
};


            {
                test: /\.hbs/,
                use: 'handlebars-webpack-plugin',
                exclude: /node_modules/
            }


*/


module.exports = {
  entry: './src/index.ts',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
   port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

            {
                test: /\.hbs/,
                use: 'handlebars-loader',
                exclude: /node_modules/
            },


	{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],

        exclude: /node_modules/

      	},

     {
       test: /index\.html/,
       type: 'asset/resource',
       generator: {
         filename: 'index.html'
       }
     },


    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],

	
        fallback: {
            "fs": false
        },

  },




  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};



