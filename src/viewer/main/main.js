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
            log: []
        });

        const post = await Promise.all (
            [aws.getStationInfo()]);
        console.log(post);

        const log = post[0].data;

        this.setState({
            fetching: false,
            log
        });
    }

    componentDidMount() {
        this.awsStationInfo();
    }

    render() {
        const {fetching, log} = this.state;
        console.log(fetching, log);
        return (
            <Wrapper>
                <MapLoader />
            </Wrapper>
        );
    }
}

export default MainViewer;