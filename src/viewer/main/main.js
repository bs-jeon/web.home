import React, { Component } from 'react';
import { Wrapper, MapLoader } from '../../components';
import * as aws from '../../aws/post';

class MainViewer extends Component {

    constructor(props) {
        super();

        //Initial component state
        this.state = {
            fetching: false,
            log: ''
        }
    }

    awsStationInfo = async () => {

        this.setState({
            fetching: true,
            stationInfo: []
        });

        const post = await Promise.all (
            [aws.getStationInfo()]);
        console.log(post);

        let response = post[0].data;

        if (response.resultCode === '200') {
            let jsonData = response.result;
            console.log("JSON" + JSON.stringify(jsonData[1]));
        }

        this.setState({
            fetching: false,
        });
    }

    componentDidMount() {
        this.awsStationInfo();
    }

    render() {
        return (
            <Wrapper>
                <MapLoader />
            </Wrapper>
        );
    }
}

export default MainViewer;