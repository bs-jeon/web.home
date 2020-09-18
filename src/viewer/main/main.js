import React, { Component } from 'react';
import { Wrapper, MapLoader } from '../../components';
import * as aws from '../../aws/post';

class MainViewer extends Component {

    constructor(props) {
        super();

        //Initial component state
        this.state = {
            fetching: false,
            pcpStationInfo: []
        }
    }

    awsStationInfo = async () => {

        this.setState({
            fetching: true,
            pcpStationInfo: [],
            // pcpMonthInfo: [],
            // pcpWeekInfo: [],
            // pcpDayInfo: []
        });

        const post = await Promise.all (
            [aws.getStationInfo(),
            aws.getCurrentInfo()]);
        console.log(post);

        const resp_getStationInfo = post[0].data;
        const resp_getCurrentInfo = post[1].data;
        if (resp_getStationInfo.resultCode === '200') {
            console.log(resp_getStationInfo.result);

            this.setState({
                pcpStationInfo: resp_getStationInfo.result,
            });
        }

        if (resp_getCurrentInfo.resultCode === '200') {
            console.log(resp_getCurrentInfo.result);
        }

        this.setState({
            fetching: false,
        });
    }

    componentDidMount() {
        this.awsStationInfo();
    }

    render() {

        const {fetching, pcpStationInfo} = this.state;

        return (
            <Wrapper>
                <MapLoader 
                pcpStationInfo = {pcpStationInfo}/>
            </Wrapper>
        );
    }
}

export default MainViewer;