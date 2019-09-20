import { StyleSheet, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Loginstyles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center"
    },
    LogoStyles: {
        height: Platform.OS === 'ios' ? hp('13.5%') : hp('17.5%'),
        width: wp('42%')
    },
    AuthenticationContainer: {
        flex: 0.6,
        marginTop: 100
    },
    logoContainer: {
        flex: 0.4,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    TextInputContainer: {
        width: Platform.OS === 'ios' ? wp('70%') : wp('75%'),
        height: Platform.OS === 'ios' ? hp('6%') : hp('7%'),
        borderWidth: 1,
        backgroundColor: "#F6F7FB",
        borderRadius: 5,
        borderColor: 0,
        marginTop: 10
    },
    TextInputStyle: {
        textAlign: "left",
        marginLeft: 10,
        marginTop: Platform.OS === 'ios' ? 15 : 5,
    },
    SignupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    LoginContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: Platform.OS === 'ios' ? wp('70%') : wp('75%'),
        height: Platform.OS === 'ios' ? hp('6%') : hp('7.5%'),
        borderWidth: 0,
        backgroundColor: "#31C5C3",
        borderRadius: 30,
        borderColor: 0,
        borderRadius: 30,
        paddingVertical: 8,
        marginTop: 80,
        marginBottom: 20,
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#31C5C3',
        shadowOpacity: 0.5,
    },
    LoginTextStyle: {
        fontSize: 14,
        color: "white",
        fontWeight: "600"
    },
    TextColor: {
        color: "#31C5C3",
        fontWeight: "600"
    },
    ForgotContainer: {
        flexDirection: "row",
        marginVertical: 10
    },
    TextBlackColor: {
        color: "#898989",
        fontWeight: "500"
    },
    errorContainer: {
        justifyContent: 'center',
    },
    error: {
        borderColor: "red",
    },
})
export default Loginstyles