import '../app/globals.css'; // O la ruta a tus estilos globales
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;