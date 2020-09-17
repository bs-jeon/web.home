import axios from 'axios';

export function getStationInfo() {
    const aws_url = 'https://pf2g60j2w2.execute-api.ap-northeast-2.amazonaws.com/prod/station/information/';
    let request = {
        method: 'POST',
        url: aws_url,
        headers: {
            'x-api-key': 'UaW7RafsoD1GOdpYzsNntajSMHR3AmngKtPDPJqa',
            'Content-Type': 'application/json; charset=utf-8',
        },
        data: {
            'type': 'station'
        }
    };

    console.log(request);
    return axios(request);
    // let response = await axios(request);
    // let responseOk = response && response.status === 200 && response.statusText === 'OK';

    // let data  = await response.data;
    // if (responseOk) {
    //     console.log(data);
    // } else {
    //     console.log(response)
    // }
}