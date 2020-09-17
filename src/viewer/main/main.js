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
        });

        const post = await Promise.all (
            [aws.getStationInfo()]);
        console.log(post);

        const response = post[0].data;
        if (response.resultCode === '200') {
            console.log(response.result)
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