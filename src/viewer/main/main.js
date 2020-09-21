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

        const post_getStation = await aws.getStationInfo();
        const resp_getStation = post_getStation.data;
        if ( resp_getStation.resultCode === '200' ) {
            //To Do 
            // Station 정보를 받아와서 Unique ID 별로 Monthly, Weekly, Daily, current 정보를 얻는다 
            // uniqueid List를 만들어야 한다. 
            let result = resp_getStation.result;
            
            let arrayData = new Array();

            for ( let i = 0; i < Object.keys(result).length; i++ ) {
                console.log(result[i]);
            }

            const post = await Promise.all (
                [aws.getCurrentInfo()
                ]);
            console.log(post);
    
            const resp_getCurrentInfo = post[0].data;
            if (resp_getCurrentInfo.resultCode === '200') {
                console.log(resp_getCurrentInfo.result);
            }
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