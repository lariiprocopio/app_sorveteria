import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#260F0D',
        padding: 20,
},
overlayOne: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(38, 15, 13, 0.8)', // Cor preta com 50% de opacidade
    justifyContent: 'center',
    alignItems: 'center',
},
});
