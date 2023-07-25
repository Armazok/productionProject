import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { IBuildOptions } from './types/config';

export function buildPlugins({
    paths, isDev, apiUrl, project,
}: IBuildOptions): webpack.WebpackPluginInstance[] {
    const plugin = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS__DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if (isDev) {
        plugin.push(new ReactRefreshWebpackPlugin());
        plugin.push(new webpack.HotModuleReplacementPlugin());
        plugin.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return plugin;
}
