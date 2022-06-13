import App from './App';
import DataProvider from './DataPRovider';

const ProviderLayer = () => {
    return (
        <DataProvider>
            <App />
        </DataProvider>
    )
}

export default ProviderLayer;