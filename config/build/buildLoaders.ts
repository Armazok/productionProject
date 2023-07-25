import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { BuildBabelLoader } from './loaders/buildBabelLoader.';
import { BuildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = BuildBabelLoader(options);
    const cssLoader = BuildCssLoader(isDev);

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
