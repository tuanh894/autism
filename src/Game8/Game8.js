import React from "react";
import {StatusBar} from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";
import {Image, View, TouchableOpacity, Animated} from 'react-native';
import styles from './style';

export default class Game6 extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            status1:false,
            status2:false,
            status3:false,
            status4:false,
            status5:false,
            status6:false,
            status7:false,
            status8:false,
            status9:false,
            status10:false,
            status11:false,
            status12:false,
            status13:false,
            status14:false,
        }
    }

    static navigationOptions = {
        header: null
    };
    hideIma1(){
        this.setState({
            status1:true
        });
    }

    getMyStyle1() {
        if (this.state.status1) {
            return {

                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma2(){
        this.setState({
            status2:true
        });
    }
    getMyStyle2() {
        if (this.state.status2) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma3(){
        this.setState({
            status3:false
        });
        alert('wrong')
    }
    getMyStyle3() {
        if (this.state.status3) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma4(){
        this.setState({
            status4:true
        });
    }
    getMyStyle4() {
        if (this.state.status4) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma5(){
        this.setState({
            status5:true
        });
    }
    getMyStyle5() {
        if (this.state.status5) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma6(){
        this.setState({
            status6:true
        });
    }
    getMyStyle6() {
        if (this.state.status6) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma7(){
        this.setState({
            status7:false
        });
        alert('wrong')
    }
    getMyStyle7() {
        if (this.state.status7) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma8(){
        this.setState({
            status8:true
        });
    }
    getMyStyle8() {
        if (this.state.status8) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma9(){
        this.setState({
            status9:false
        });
        alert('wrong')
    }
    getMyStyle9() {
        if (this.state.status9) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma10(){
        this.setState({
            status10:true
        });
    }
    getMyStyle10() {
        if (this.state.status10) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma11(){
        this.setState({
            status11:true
        });
    }
    getMyStyle11() {
        if (this.state.status11) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma12(){
        this.setState({
            status12:false
        });
        alert('wrong')
    }
    getMyStyle12() {
        if (this.state.status12) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma13(){
        this.setState({
            status13:true
        });
    }
    getMyStyle13() {
        if (this.state.status13) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma14(){
        this.setState({
            status14:true
        });
        this.props.navigation.navigate("Game8_1")
    }
    getMyStyle14() {
        if (this.state.status14) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}></Image>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity
                                onPress={() =>goBack()}
                            >
                                <Image style={styles.imagesLeft} source={require('../img/back.png')}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => this.hideIma1()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle1()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma2()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle2()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma3()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle3()} source={require('../img/8/hinhtron.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma4()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle4()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma5()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle5()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideIma6()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle6()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideIma7()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle7()} source={require('../img/8/hinhtamgiac.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => this.hideIma8()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle8()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma9()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle9()} source={require('../img/8/hinhchunhat.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma10()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle10()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma11()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle11()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma12()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle12()} source={require('../img/8/hinhthoi.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideIma13()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle13()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideIma14()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle14()} source={require('../img/8/hinhvuong.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container>
        );
    }
}


