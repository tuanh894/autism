import React from "react";
import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body,Button,Left,Icon,Title,Right,Spinner} from 'native-base';
import Detail from "./Detail.js";
import styles from "./style.js";
import Moment from 'moment';

export default class TabEdu extends React.Component {
    constructor(props) {
        super(props);
        console.log("Tab education news...");
        console.log(props);
        this.state = {
            isLoading: true,
            items: [],

        }
    }

    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/article/edu')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    items: responseJson.items,
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        if(this.state.isLoading){
            return (
                <Spinner color='blue' />
            );
        }
        const {navigate} = this.props.navigation;

        return (

            <Container style={styles.container}>
                <Content>
                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem onPress={() => navigate("Detail",{item})}>
                                  <Thumbnail square large size={160} source={{uri: (item.absUrl)}}/>
                                  <Body>
                                  <Text>{item.title}</Text>
                                  <Text note>{item.summary}</Text>
                                  <Text note><Icon ios='ios-time' android="md-time" style={{fontSize: 12, color: '#999'}}/> {Moment(item.published_at * 1000).format('DD-MM-YYYY')}</Text>
                                  </Body>
                              </ListItem>
                          }>
                    </List>

                </Content>
            </Container>
        );
    }
}

TabEdu.navigationOptions = ({ navigation }) => ({
    title: 'Tin giáo dục',
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Tin tức</Title>
            </Body>
            <Right />
        </Header>
    )
});
