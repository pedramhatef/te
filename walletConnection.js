// Initialize TON Connect
const tonConnect = new TonConnect({
    manifestUrl: 'https://Pedramhatef.github.io/my-twa', // Replace with your actual manifest URL
    qrcode: true
});

async function connectWallet() {
    try {
        // Request connection to the wallet
        const session = await tonConnect.connect();
        
        // Successfully connected
        console.log('Wallet connected:', session.account);
        
        // You can now use the session to interact with the wallet
    } catch (error) {
        console.error('Error connecting wallet:', error);
        throw error;
    }
}
