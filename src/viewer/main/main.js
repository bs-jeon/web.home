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
            pcpStationInfo: []
        });

        const post_getStationInfo = await aws.getStationInfo();
        const resp_getStationInfo = await post_getStationInfo.data;
        let jArrayStationInfo = new Array();
        if (resp_getStationInfo.resultCode === '200') {
            console.log(resp_getStationInfo.result);

            for (let i = 0; i < resp_getStationInfo.result.length; i++) {
                let jObject = {
                    "uniqueID": resp_getStationInfo.result[i].uniqueID
                }
                jArrayStationInfo.push(jObject);
                console.log(resp_getStationInfo.result[i]);
            }

            const post_getPcpInfo = await Promise.all ([
                aws.getCurrentInfo(jArrayStationInfo),
                // aws.getMonthlyInfo(jArrayStationInfo)
            ]);

            const resp_getCurrentInfo = post_getPcpInfo[0].data;
            this.setState ({
                pcpStationInfo: resp_getCurrentInfo,
            })
            console.log(resp_getCurrentInfo);
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
                stationInfo = {pcpStationInfo.result}/>
            </Wrapper>
        );
    }
}

export default MainViewer;