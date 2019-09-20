import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DashboardStyle = StyleSheet.create({
    HeaderLeftComponent: {
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "#31C5C3",
        width: Platform.OS === 'ios' ? 30 : 35,
        height: Platform.OS === 'ios' ? 30 : 35,
        justifyContent: "center", alignItems: "center",
        borderColor: 0
    },
    LeftImageStyle: {
        height: hp('2%'),
        width: wp('2%')
    },
    CenterImageStyle: {
        height: Platform.OS === 'ios' ? hp('4%') : hp('5%'),
        width: Platform.OS === 'ios' ? wp('11.8%') : wp('12%')
    },
    RightImageStyle: {
    },
    HeaderContainer: {
        backgroundColor: '#FFFFFF',
        width: wp('100%'),
        height: hp('15%'),
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#31C5C3',
        shadowOpacity: 0.5,
    },
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    PortfolioContainer: {
        flex: 0.3,
        paddingBottom: Platform.OS === 'ios' ? 20 : 40,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        width: "100%",
        borderBottomColor: "1px solid rgba(0, 0, 0, .2 )",
    },
    CategoriesContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: wp('80%'),
        alignItems: "center",
        borderWidth: 0,
        backgroundColor: "#F2F2F2",
        borderColor: 0,
        height: 30,
        borderRadius: 100,
        marginTop: 20,

    },
    CategoryTextStyle: {
        fontSize: 8,
        textTransform: "uppercase",
        color: "#3AD1BF",
        fontWeight: "500",
        fontFamily : "gothamrounded-bold"
    },
    PortfolioNameContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: Platform.OS === 'ios' ? 47 : 83,
        marginTop: Platform.OS === 'ios' ? 25 : 50,
        marginBottom: Platform.OS === 'ios' ? 15 : 10,
    },
    DotStyle: {
        height: 7,
        width: 7,
        backgroundColor: "#3AD1BF",
        borderRadius: 10,
        marginRight: 5
    },
    PortfolioNameStyle: {
        flex: 1,
        fontSize: 18,
        color: "#898989",
        fontFamily : "gothamrounded-bold"
    },
    PortfolioValueStyle: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#3AD1BF",
        marginLeft: 10
    },
    FiltersContainer: {
        flex: 0.7,
        alignItems: "center",
        backgroundColor: "white",
        width: "100%"
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0,
        borderColor: 0,
        width: wp('83%'),
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 35,
        shadowOffset: { width: 0, height: 0, },
        shadowColor: '#898989',
        shadowOpacity: 0.5,
        borderRadius: 8,
        borderColor: "1px solid rgba(0, 0, 0, .2 )",
        borderWidth: Platform.OS === 'ios' ? 0 : 1
    },
    inputs: {
        height: Platform.OS === 'ios' ? 36 : 45,
        marginLeft: 16,
        flex: 1,
    },
    inputIcon: {
        width: 18,
        height: 18,
        justifyContent: 'center',
        marginRight: 5
    },
    FiltersCategoriesContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: wp('83%'),
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 0,
        backgroundColor: "#F2F2F2",
        borderColor: 0,
        height: 30,
        borderRadius: 100,

    },
    FiltersTextStyle: {
        fontSize: 10,
        textTransform: "uppercase",
        color: "#3AD1BF",
        fontWeight: "500"
    },
    ValueStyles: {
        flexDirection: "row",
        paddingVertical: 15,
        borderBottomColor: "1px solid rgba(0, 0, 0, .2 )",
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ImageIconContainer: {
        flexDirection: "row"
    },
    backgroundImageStyle: {
        height: 30,
        width: 30
    },
    AlphaImageStyle: {
        height: Platform.OS === 'ios' ? 15 : 18,
        width: 15,
        marginLeft: 6,
        marginTop: Platform.OS === 'ios' ? 8 : 6
    },
    ValueAmountContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "70%",
        marginLeft: 18
    },
    backgroundImageStyleLarge: {
        height: 40,
        width: 40
    },
    AlphaImageStyleLarge: {
        height: 19,
        width: 17,
        marginLeft: 10,
        marginTop: 10
    },
    AmountValueTextStyle: {
        textTransform: "uppercase",
        fontSize: 14,
        color: "#466170"
    },
    SelectedCategories: {
        borderWidth: 0,
        backgroundColor: "#3AD1BF",
        width: Platform.OS === 'ios' ? 65 : 70,
        height: 20,
        borderRadius: 100
    },
    SelectedTextCategory: {
        color: "white",
        textAlign: "center",
        marginTop: Platform.OS === 'ios' ? 5 : 3
    },
    SelectedCategoriesAll: {
        borderWidth: 0,
        backgroundColor: "#3AD1BF",
        width: Platform.OS === 'ios' ? 30 : 35,
        height: 20,
        borderRadius: 100
    }
})
export default DashboardStyle