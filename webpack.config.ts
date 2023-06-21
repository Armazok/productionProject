import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {IBuildEnv, IBuildPath} from "./config/build/types/config";
import path from "path";


export default  (env: IBuildEnv) => {

    const paths: IBuildPath = {
        entry:  path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
}