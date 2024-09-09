import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
       // justifyContent: 'center',
       // alignItems: 'center',
        backgroundColor: '#f285ad',
      
    },
    background: {
        flex: 1,
         justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: '100%'
    
    },
    overlayOne: {
        ...StyleSheet.absoluteFillObject,
 // Cor preta com 50% de opacidade
       // justifyContent: 'center',
        //alignItems: 'center',
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '65%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 8,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        borderRadius: 30,
        boxShadow: '5px 4px 3px rgba(0, 0, 0, 0.4)', /* offset-x | offset-y | blur-radius | spread-radius | color */
    },
    btnText:{
        flex: 1,
        fontSize: 18,
        color: '#8c4d3f',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    viewIndex:{
        backgroundColor:"#f285ad",
         height: 610,
          justifyContent:"center",
           alignItems:"center",
            paddingBottom: 180,
             fontSize: 40,
             fontWeight: 'bold'
    }
});

export default styles;
