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
}

export function getMonthInfo() {

}

export function getWeekInfo() {

}

export function getDayInfo() {

}

// Uri uri = new Uri.Builder()
//                     .scheme("https")
//                     .authority("pf2g60j2w2.execute-api.ap-northeast-2.amazonaws.com")
//                     .appendPath("prod")
//                     // will be changed
//                     .appendPath("station")
//                     .appendPath("map")
//                     .appendPath("timestatistic")
//                     .build();

//             JSONArray data_list = new JSONArray();
//             for (int i = 0; i < uId.size(); i++) {
//                 JSONObject body = new JSONObject();
//                 body.put("uniqueID", uId.get(i));
//                 //            body.put("currentTime", getDateTime());
//                 data_list.put(body);
//             }

//             JSONObject itemList = new JSONObject();
//             itemList.put("uniqueID_list", data_list);
//             itemList.put("time_type", "min_avg");
//             itemList.put("min", "10");


//=========================================================================================

// Uri uri = new Uri.Builder()
//                     .scheme("https")
//                     .authority("pf2g60j2w2.execute-api.ap-northeast-2.amazonaws.com")
//                     .appendPath("prod")
//                     // will be changed
//                     .appendPath("station")
//                     .appendPath("map")
//                     .appendPath("timestatistic")
//                     .build();

//             JSONArray data_list = new JSONArray();
//             for (int i = 0; i < uId.size(); i++) {
//                 JSONObject body = new JSONObject();
//                 body.put("uniqueID", uId.get(i));
//                 //            body.put("currentTime", getDateTime());
//                 data_list.put(body);
//             }

//             JSONObject itemList = new JSONObject();
//             itemList.put("uniqueID_list", data_list);
//             itemList.put("time_type", "hour_sum");
//             itemList.put("hour", "1");


//=========================================================================================

// Logger.I(" requestDailyAve: now - requestTime = "+ (now-requestTime));
//         if(now > requestTime) {
//             Uri uri = new Uri.Builder()
//                     .scheme("https")
//                     .authority("pf2g60j2w2.execute-api.ap-northeast-2.amazonaws.com")
//                     .appendPath("prod")
//                     // will be changed
//                     .appendPath("station")
//                     .appendPath("period")
//                     .appendPath("weeklyhour")
//                     .build();

//             JSONArray data_list = new JSONArray();
//             JSONObject id = new JSONObject();
//             id.put("uniqueID", uId);
//             data_list.put(id);
//             JSONObject body = new JSONObject();
//             body.put("uniqueID_list", data_list);
// //        body.put("currentTime",YYMMDD);


// Logger.I("requestWeeklyAve : now - requestTime = "+ (now-requestTime));
//         if(now > requestTime) {
//             String[] weekDay ={ "Mon", "Tue", "Wed","Tur","Fri","Sat","Sun"};
//             Uri uri = new Uri.Builder()
//                     .scheme("https")
//                     .authority("pf2g60j2w2.execute-api.ap-northeast-2.amazonaws.com")
//                     .appendPath("prod")
//                     // will be changed
//                     .appendPath("station")
//                     .appendPath("period")
//                     .appendPath("dayofweek")
//                     .build();

//             JSONObject body = new JSONObject();
//             body.put("uniqueID", uId);
//             body.put("currentTime", getDateTime());
//             JSONArray data_list = new JSONArray();
//             data_list.put(body);

//             JSONObject itemList = new JSONObject();
//             itemList.put("uniqueID_list", data_list);


// Logger.I("requestMonthlyAve : now - requestTime = "+ (now-requestTime));
//         if(now > requestTime) {
//             Uri uri = new Uri.Builder()
//                     .scheme("https")
//                     .authority("pf2g60j2w2.execute-api.ap-northeast-2.amazonaws.com")
//                     .appendPath("prod")
//                     // will be changed
//                     .appendPath("station")
//                     .appendPath("period")
//                     .appendPath("daily")
//                     .build();

//             JSONArray data_list = new JSONArray();
//             JSONObject id = new JSONObject();
//             id.put("uniqueID", monthlyData.Uid);
//             data_list.put(id);
//             String YYMMDD = getDateTime();
//             JSONObject body = new JSONObject();
//     //        String[] array = YYMMDD.split("-");
//             body.put("uniqueID_list", data_list);
//             body.put("currentTime",YYMMDD);
//             body.put("searchYear",monthlyData.Year);
//             body.put("searchMonth",monthlyData.Month);