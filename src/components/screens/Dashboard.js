import React, { Component } from 'react';
import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Header, } from 'react-native-elements';
import DashboardStyle from '../styles/DashboardStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const { Container, PortfolioContainer, CategoriesContainer, FiltersContainer, CategoryTextStyle, PortfolioNameContainer,
    DotStyle, PortfolioNameStyle, PortfolioValueStyle, inputContainer, inputIcon, inputs, FiltersTextStyle, ValueStyles,
    FiltersCategoriesContainer, ImageIconContainer, backgroundImageStyleLarge, AlphaImageStyleLarge, backgroundImageStyle,
    AlphaImageStyle, ValueAmountContainer, AmountValueTextStyle, SelectedCategories, SelectedTextCategory, SelectedCategoriesAll, SelectedTextFilters,
    SelectedTextCategoryAll, FetchDataStyle, PortfolioValueContainer
} = DashboardStyle
const search = require('../../assets/search.png')
const Cbackground = require('../../assets/background.png')
const Bbackground = require('../../assets/Bback.png')
const Abackground = require('../../assets/Aback.png')
const C = require('../../assets/C.png')
const B = require('../../assets/B.png')
const A = require('../../assets/A.png')

export default class Dashboard extends Component {
    static navigationOptions = {
        header: (
            <Header
                leftComponent={
                    <View >
                        <TouchableOpacity
                            style={DashboardStyle.HeaderLeftComponent}>
                            <Image source={require('../../assets/mark.png')} style={DashboardStyle.LeftImageStyle} />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={<View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/logo/Vector.png')} style={DashboardStyle.CenterImageStyle} />
                    </TouchableOpacity>
                </View>
                }
                rightComponent={<View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/noti.png')} style={DashboardStyle.RightImageStyle} />
                    </TouchableOpacity>
                </View>
                }
                containerStyle={DashboardStyle.HeaderContainer}
            />
        )
    };
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            selectedFilters: null,
            selectedValue: null,
            data: '',
            categoryType: ''
        };
    }
    componentDidMount() {
        fetch('https://api.myjson.com/bins/100vul')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    SelectCategories = (categoryType) => {
        this.setState({ selected: categoryType })
    }

    SelectFilters = (FiltersType) => {
        this.setState({ selectedFilters: FiltersType })
    }

    getTypeData = (data) => {
        if (this.state.selected != 'All' && this.state.selected != null) {
            return data[this.state.selected];
        }
        else if (this.state.selected == 'All') {
            let compositeData = []
            for (element in data) {
                for (el in data[element]) {
                    let row = data[element]
                    compositeData.push(row[el])
                }
            }
            return compositeData
        }
    }

    render() {
        const data = this.state.data
        return (
            <KeyboardAwareScrollView contentContainerStyle={Container}>
                <View style={PortfolioContainer}>
                    <View style={PortfolioNameContainer}>
                        <View style={DotStyle}></View>
                        <Text style={PortfolioNameStyle}>Your Portfolio</Text>
                    </View>
                    <View style={PortfolioValueContainer}>
                        <ImageBackground source={(this.state.selected == "category_A") ? Abackground : (this.state.selected == "category_B") ? Bbackground : (this.state.selected == "category_C") ? Cbackground : Abackground} style={backgroundImageStyleLarge} >
                            <Image source={(this.state.selected == "category_A") ? A : (this.state.selected == "category_B") ? B : (this.state.selected == "category_C") ? C : A} style={AlphaImageStyleLarge} /></ImageBackground>
                        <Text style={PortfolioValueStyle}>{'3,700.25'}</Text>
                    </View>
                    <View style={[CategoriesContainer,]}>
                        <TouchableOpacity onPress={() => this.SelectCategories('category_A')}
                            style={(this.state.selected === 'category_A') ? SelectedCategories : {}}
                        >
                            <Text style={[CategoryTextStyle, (this.state.selected === 'category_A') ? SelectedTextCategory : {}]}>{'Category A'}</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => this.SelectCategories('category_B')}
                            style={(this.state.selected === 'category_B') ? SelectedCategories : {}}
                        >
                            <Text style={[CategoryTextStyle, (this.state.selected === 'category_B') ? SelectedTextCategory : {}]}>{'Category B'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.SelectCategories('category_C')}
                            style={(this.state.selected === 'category_C') ? SelectedCategories : {}}
                        >
                            <Text style={[CategoryTextStyle, (this.state.selected === 'category_C') ? SelectedTextCategory : {}]}>{'Category C'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.SelectCategories('All')}
                            style={(this.state.selected === 'All') ? SelectedCategoriesAll : {}}
                        >
                            <Text style={[CategoryTextStyle, (this.state.selected === 'All') ? SelectedTextCategoryAll : {}]}>{'All'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={FiltersContainer}>
                    <View style={inputContainer}>
                        <TextInput style={inputs}
                            placeholder="Search Value"
                            placeholderTextColor="#B3B3B3"
                            underlineColorAndroid='transparent'
                        />
                        <TouchableOpacity>
                            <Image style={inputIcon} source={search} />
                        </TouchableOpacity>
                    </View>
                    <View style={FiltersCategoriesContainer}>
                        <TouchableOpacity onPress={() => this.SelectFilters('AllFilter')}
                            style={(this.state.selectedFilters === 'AllFilter') ? SelectedCategoriesAll : {}}
                        >
                            <Text style={[FiltersTextStyle, (this.state.selectedFilters === 'AllFilter') ? SelectedTextFilters : {}]}>{'All'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.SelectFilters('Filter1')}
                            style={(this.state.selectedFilters === 'Filter1') ? SelectedCategories : {}}
                        >
                            <Text style={[FiltersTextStyle, (this.state.selectedFilters === 'Filter1') ? SelectedTextFilters : {}]}>{'Filter 1'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.SelectFilters('Filter2')}
                            style={(this.state.selectedFilters === 'Filter2') ? SelectedCategories : {}}
                        >
                            <Text style={[FiltersTextStyle, (this.state.selectedFilters === 'Filter2') ? SelectedTextFilters : {}]}>{'Filter 2'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.SelectFilters('Filter3')}
                            style={(this.state.selectedFilters === 'Filter3') ? SelectedCategories : {}}
                        >
                            <Text style={[FiltersTextStyle, (this.state.selectedFilters === 'Filter3') ? SelectedTextFilters : {}]}>{'Filter 3'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={FetchDataStyle}>

                        <FlatList
                            data={this.getTypeData(data)}

                            renderItem={({ item }) =>
                                <TouchableOpacity>
                                    <View style={ValueStyles}>
                                        <View style={ImageIconContainer}>
                                            <ImageBackground source={(item.category == 'A') ? Abackground : (item.category == 'B') ? Bbackground : Cbackground} style={[backgroundImageStyle]} >
                                                <Image source={(item.category == 'A') ? A : (item.category == 'B') ? B : C} style={AlphaImageStyle} /></ImageBackground>
                                        </View>
                                        <View style={ValueAmountContainer}>
                                            <Text style={AmountValueTextStyle}>{item.status}</Text>
                                            <Text style={AmountValueTextStyle}>{item.balance}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            } />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
