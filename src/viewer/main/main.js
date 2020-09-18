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
            [aws.getStationInfo()]);
        console.log(post);

        const response = post[0].data;
        if (response.resultCode === '200') {
            console.log(response.resultCode);

            this.setState({
                pcpStationInfo: response.result,
            });
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
        console.log("before render"+fetching+" "+JSON.stringify(pcpStationInfo));

        return (
            <Wrapper>
                <MapLoader 
                pcpStationInfo = {pcpStationInfo}/>
            </Wrapper>
        );
    }
}

export default MainViewer;