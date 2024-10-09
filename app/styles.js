import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f285ad',
    },
    background: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    overlayOne: {
        ...StyleSheet.absoluteFillObject,
        // Adicione estilos aqui se necessário
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '65%', // Você pode ajustar isso conforme necessário
        paddingVertical: 10,
        marginBottom: 8,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        borderRadius: 30,
        // Removi boxShadow, pois não é suportado no React Native
    },
    btnText: {
        fontSize: 18,
        color: '#8c4d3f',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    viewIndex: {
        flexGrow: 1, 
        backgroundColor: "#f285ad",
        height: '50%', // Define a altura como 70% do container pai
        justifyContent: "center",
        alignItems: "center",
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        padding: 20,
        paddingBottom: 240,
    },
    tituloMenu: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: "center",
    },
    cardMenu: {
        
        backgroundColor: '#F2D8C2',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width:'80%',
        alignSelf: 'center', // Centraliza o card
    },
    cardMenuDetails: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageMenu: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cardMenuText: {
        flex: 1,
        marginLeft: 20,
    },
    itemTwotitleProduct: {
        fontSize: 18,
        fontWeight: '600',
    },
    itemTwodescriptionProduct: {
        fontSize: 14,
        color: '#555',
    },
    buttonContainer: {
        alignItems: 'center', // Centraliza horizontalmente
        marginTop: 10, // Espaço acima do botão
    },
    itemTwoButton: {
        marginTop: 10,
        backgroundColor: '#f285ad', // Cor do botão
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
   
        width: '50%',
    },
    itemTwoButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    touchableButton: {
        width: '100%', // Para ocupar toda a largura do botão
        alignItems: 'center',
    },
});
export default styles;
