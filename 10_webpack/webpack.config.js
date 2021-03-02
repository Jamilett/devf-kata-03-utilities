// Comandos para modo watch de webpack para guardar cambios y compilarlos
/* npm i
npm run start:dev  similar a nodemon inicializa el servidor de webpack y nos ayuda a ver los cambios. Rama de desarrollo para compilar automaticamente
npm run build nos ayuda a compilar manual y se muestra en dist se recomienda usar hasta que se mande a produccion
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [ //Aqui voy a caragar todos los loader que necesito para que webpack trabaje como quiera
            {
                //test ---> que tengo que buscar
                //use ----> de lo que encontre que loader voy a aplicar
                test: /\.html$/, // expresion regular ---> busca todos los archivos que terminen en .html
                use: [{
                    loader: "html-loader", //Este va a traducir todo el html para que webpack lo entienda
                    options: { minimize: true }
                }]
            },
            {
                test: /\.scss$/,
                use: [ //Los loader el orden si importa
                    { loader: MiniCssExtractPlugin.loader },
                    // "style-loader", // Procesa estilos en line
                    "css-loader", //Procesa estilos en archivos css
                    "sass-loader" // procesa estilos en archivos scss (sass)
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", //Que archivo de html va a ser el base para mi proyecto
            filename: "./index.html" // Que unico archivo de html se va a generar
        }),
        new MiniCssExtractPlugin({ //es opcional
            filename: "[name].css",
            chunkFilename: "[id].css" //solo es el caso si hay mucho css hay muchas lineas de css
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}