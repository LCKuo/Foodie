import { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const base_url = 'http://35.79.34.159/'
const base_secret = 'Xx4JK5lIZiLLb2X'
const base_Invitationcode = 'ruzf7wzRWwb8BUz'

export let isLogin = false;
export const _setLogin = () => {
  isLogin = true;
}

export let data = {
  reward_id: null,
  User_Token: '',
};

export let Profile_data = {
  Username: null,
  avatar: null,
  skin: null,
};

export const _setToken = (token) => {
  data.User_Token = token
}

export const restoreToken = async () => {
  try {
    await AsyncStorage.setItem("User_Token", data.User_Token)
  } catch (e) {
    alert(`cleaning error ${e}`)
  }
}
export const getToken = async () => {
  try {
    //data.User_Token = await AsyncStorage.getItem("User_Token")
  } catch (e) {
    alert(`cleaning error ${e}`)
  }
}

export const test = (local) => {
  Alert.alert(local);
}

//#region 註冊/登入/用戶資料獲取
/*註冊*/
export const Registration = (username, id, email, invitation) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "csrftoken=pE7NZPyp3Pgtzqqs9YYzsrk9IWnONVtm; messages=.eJyLjlaKj88qzs-Lz00tLk5MT1XSMdAxMtVRiik1SU01VUjOyCxJLS7R04sptUhNTAKJpqXElJoZGRrElJoaWabFlJqbmQPFTdNMTZV0lJRidQibSF3TqO8-Ek2MBQBBC2V1:1oW2Ma:b0BKF2JazYOjfoO_ejr2ZG4KNQELbB6ps0s7lU2WGFw; sessionid=m5wg2fvpytxyh1ih0lsqidu9w5kcj5x8");

  if (invitation == "") {
    var raw = JSON.stringify({
      "username": `${username}`,
      "password1": `${id}`,
      "password2": `${id}`,
      "email": `${email}`
    });
  } else {
    var raw = JSON.stringify({
      "username": `${username}`,
      "password1": `${id}`,
      "password2": `${id}`,
      "invitation_code": `${invitation}`,
      "email": `${email}`
    });
  }

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${base_url}/auth/registration/register/`, requestOptions)
    .then(response => response.text())
    .then(response => {
      console.log(response)
      let login = JSON.parse(response);
      if (login.email != null || login.non_field_errors != null || login.username != null) {
        Alert.alert("Registration Error", JSON.stringify(login))
      } else {
        alert("請前往認證信箱!")
      }
    })
    .catch(error => { Alert.alert("error", JSON.stringify(error)); });
}
/*登入*/
export const login = (username, id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "csrftoken=iPftGyB5kalUGLd2KIpb2qeekgpeXnB8; messages=.eJzVzksKg0AMgOGrSNZBbDCOnsXI4CPjg7aCY-7f9gRSmI3bf_Hxty14v8X97V8aYz8rYIHECGKlKmfjsp4azzwXq7UffjVMYhU9CjGmJoi5yn07B2ZAgA6vxbRa-r_E4tPGNehROyK6F_uP230Axk61lg:1oWCtt:IYKLaP31QbqbgqmNwBoDyTDyPPG1nbdld0iF3JZmEXA; sessionid=y4v2ede36aqlxuie4icpvq3ey3twp89f");

  var raw = JSON.stringify({
    "username": `${username}`,
    "password": `${id}`
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${base_url}auth/login/`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      let login = JSON.parse(result);
      if (login.key != null) {
        data.User_Token = login.key
        GetReward()
        restoreToken()
      } else {
        alert("請完成Email認證!")
      }
    })
    .catch(error => { Alert.alert("error", JSON.stringify(error)); });
}
/*Profile*/
export const getProflie = () => {
  var myHeaders = new Headers();

  myHeaders.append("Authorization", `Token ${data.User_Token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = "";
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${base_url}auth/profile/`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      let Profile = JSON.parse(result);
      Profile_data.Username = Profile.data.username
      Profile_data.avatar = Profile.data.avatar
      Profile_data.skin = Profile.data.account.skin
      //Alert.alert("Profile ok", Profile.msg);
    })
    .catch(error => { Alert.alert("error Profile", JSON.stringify(error)); });
}
//#endregion

/*User綁定邀請碼*/
export const PostInvitationcode = (Invitationcode) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${data.User_Token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "code": `${Invitationcode}`
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${base_url}auth/invitationcode/`, requestOptions)
    .then(response => response.text())
    .then(result => {
      let Invitationcode = JSON.parse(result);
      Alert.alert("Invitationcode ok", Invitationcode.msg);
    })
    .catch(error => { Alert.alert("error Invitationcode", JSON.stringify(error)); });
}

//#region QRcode掃碼優惠/兌換優惠/獲取用戶優惠資訊
/*掃碼優惠*/
export const reward = (secret) => {
  getToken()
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${data.User_Token}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "csrftoken=sSCJTO361CQ0OzzvIrO1V4cxgwmVZYyC; sessionid=jmvv0nwh9dfj3a5ph9sbdgrt8s33mhw1");

  var raw = JSON.stringify({
    "secret": `${secret}`
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${base_url}reward/exchange/`, requestOptions)
    .then(response => response.text())
    .then(response => {
      let reward = JSON.parse(response);
      data.reward_id = JSON.stringify(reward.code)
      Alert.alert('onPress', JSON.stringify(response));
    })
    .catch(error => {
      Alert.alert("error", JSON.stringify(error));
    });
}

/*兌換優惠*/
export const RewardRedemption = (id) => {
  getToken()
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${data.User_Token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": `${id}`
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${base_url}reward/usecoupon/`, requestOptions)
    .then(response => response.text())
    .then(response => {
      let Recall = JSON.parse(response);
      //Alert.alert('ok', JSON.stringify(Recall.msg));
    })
    .catch(error => { Alert.alert("error", JSON.stringify(error)); });
}
/*獲取優惠資訊*/
export const GetReward = async () => {
  getToken()
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${data.User_Token}`);
  //myHeaders.append("Authorization", `Token 20e0e3c0dcafbbb8eac3d18b052970171681846b`);
  myHeaders.append("Content-Type", "application/json");

  var raw = "";
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${base_url}/reward/rewards/`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      Reward_Data = JSON.parse(result)
    })
    .catch(error => { Alert.alert("rewards error", JSON.stringify(error)); });
}
//#endregion


export let Reward_Data = [
  {
    "skin": {
      "id": "c58544bf-a0cc-495a-9f23-7567fcd438a9",
      "name": "默認 PFP",
      "description": "默认 PFP",
      "img": "https://foodieverse.s3.s3.amazonaws.com/static/1024x1024.png"
    },
    "receive_time": null,
    "coupons": [
      {
        "id": 5,
        "coupon": {
          "id": "ac4846e7-ebe7-4072-baf8-78410f189064",
          "name": "賈甲假賈甲口福壽司 - 豆皮壽司一份",
          "description": "口福壽司 - 豆皮壽司一份",
          "duration": 365
        },
        "quantity": 98,
        "is_used": false,
        "use_time": null,
        "receive_time": "2022-09-17T20:53:25.757635+08:00",
        "expired": false,
        "expired_time": "2023-09-17T12:53:25.757635Z",
        "coupon_use_records": [
          {
            "coupon": 5,
            "use_time": "2022-09-19T22:22:31.605132+08:00"
          }
        ],
        "available": true
      },
      {
        "id": 14,
        "coupon": {
          "id": "eb4465dc-5f4a-4716-b24a-094f4e2972df",
          "name": "測試優惠3-1",
          "description": "測試優惠3-1",
          "duration": 0
        },
        "quantity": 100,
        "is_used": false,
        "use_time": null,
        "receive_time": "2022-09-19T17:39:05.391698+08:00",
        "expired": false,
        "expired_time": null,
        "coupon_use_records": [],
        "available": true
      },
      {
        "id": 15,
        "coupon": {
          "id": "f56011a0-2cdd-4aa7-a6f1-7514157efbf3",
          "name": "測試優惠3-2",
          "description": "測試優惠3-2",
          "duration": 0
        },
        "quantity": 100,
        "is_used": false,
        "use_time": null,
        "receive_time": "2022-09-19T17:39:05.391698+08:00",
        "expired": false,
        "expired_time": null,
        "coupon_use_records": [],
        "available": true
      },
      {
        "id": 16,
        "coupon": {
          "id": "ac4846e7-ebe7-4072-baf8-78410f189064",
          "name": "口福壽司 - 豆皮壽司一份",
          "description": "口福壽司 - 豆皮壽司一份",
          "duration": 365
        },
        "quantity": 100,
        "is_used": false,
        "use_time": null,
        "receive_time": "2022-09-19T17:39:05.391698+08:00",
        "expired": false,
        "expired_time": "2023-09-19T09:39:05.391698Z",
        "coupon_use_records": [],
        "available": true
      },
      {
        "id": 17,
        "coupon": {
          "id": "eb4465dc-5f4a-4716-b24a-094f4e2972df",
          "name": "測試優惠3-1",
          "description": "測試優惠3-1",
          "duration": 0
        },
        "quantity": 99,
        "is_used": false,
        "use_time": null,
        "receive_time": "2022-09-19T17:39:28.761079+08:00",
        "expired": false,
        "expired_time": null,
        "coupon_use_records": [],
        "available": true
      },
      {
        "id": 18,
        "coupon": {
          "id": "f56011a0-2cdd-4aa7-a6f1-7514157efbf3",
          "name": "測試優惠3-2",
          "description": "測試優惠3-2",
          "duration": 0
        },
        "quantity": 99,
        "is_used": false,
        "use_time": null,
        "receive_time": "2022-09-19T17:39:28.761079+08:00",
        "expired": false,
        "expired_time": null,
        "coupon_use_records": [],
        "available": true
      },
      {
        "id": 19,
        "coupon": {
          "id": "ac4846e7-ebe7-4072-baf8-78410f189064",
          "name": "口福壽司 - 豆皮壽司一份",
          "description": "口福壽司 - 豆皮壽司一份",
          "duration": 365
        },
        "quantity": 2,
        "is_used": false,
        "use_time": null,
        "receive_time": "2022-09-19T17:39:38.352019+08:00",
        "expired": false,
        "expired_time": "2023-09-19T09:39:38.352019Z",
        "coupon_use_records": [],
        "available": true
      }
    ],
    "rights": [
      {
        "id": 10,
        "receive_time": "2022-09-19T17:39:05.391698+08:00",
        "rights": {
          "id": "c27ca1e2-951f-450f-8c3d-32fcf4b40063",
          "name": "晶宴會館 - 全館 9 折",
          "description": "晶宴會館 - 全館 9 折",
          "duration": 365
        },
        "expired": false,
        "expired_time": "2023-09-19T09:39:05.391698Z",
        "available": true
      },
      {
        "id": 11,
        "receive_time": "2022-09-19T17:39:05.391698+08:00",
        "rights": {
          "id": "0c90a395-ca39-4b55-a7a5-94f1c57ab29e",
          "name": "測試權益3",
          "description": "測試權益3",
          "duration": 0
        },
        "expired": false,
        "expired_time": null,
        "available": true
      },
      {
        "id": 12,
        "receive_time": "2022-09-19T17:39:28.761079+08:00",
        "rights": {
          "id": "0c90a395-ca39-4b55-a7a5-94f1c57ab29e",
          "name": "測試權益3",
          "description": "測試權益3",
          "duration": 0
        },
        "expired": false,
        "expired_time": null,
        "available": true
      },
      {
        "id": 13,
        "receive_time": "2022-09-19T17:39:28.761079+08:00",
        "rights": {
          "id": "3f38bcae-175c-457c-992f-725d932a1705",
          "name": "測試權益3-1",
          "description": "測試權益3-1",
          "duration": 0
        },
        "expired": false,
        "expired_time": null,
        "available": true
      },
      {
        "id": 14,
        "receive_time": "2022-09-19T17:39:38.352019+08:00",
        "rights": {
          "id": "c27ca1e2-951f-450f-8c3d-32fcf4b40063",
          "name": "晶宴會館 - 全館 9 折",
          "description": "晶宴會館 - 全館 9 折",
          "duration": 365
        },
        "expired": false,
        "expired_time": "2023-09-19T09:39:38.352019Z",
        "available": true
      }
    ]
  },
  {
    "skin": {
      "id": "76db289c-2d94-4a59-9c22-3e442cf46c36",
      "name": "Test1",
      "description": "TestTest1Test1Test1Test1Test1Test1Test1Test1",
      "img": "https://foodieverse.s3.s3.amazonaws.com/static/17-05-06-Miniaturen_RR79033.jpg"
    },
    "receive_time": "2022-09-19T17:39:05.391698+08:00",
    "coupons": [],
    "rights": []
  },
  {
    "skin": {
      "id": "f3c1bed2-5d7d-486c-9a49-1dea9dfb9a48",
      "name": "測試優惠3",
      "description": "測試3",
      "img": "https://foodieverse.s3.s3.amazonaws.com/static/17-05-06-Miniaturen_RR79033.jpg"
    },
    "receive_time": "2022-09-19T17:39:28.761079+08:00",
    "coupons": [],
    "rights": []
  },
  {
    "skin": {
      "id": "a9fe64be-3e73-4c8d-8ec0-c6dc13c7a0e2",
      "name": "Foodie Hunter#1",
      "description": "Foodie Hunter#1",
      "img": "https://foodieverse.s3.s3.amazonaws.com/static/NFT-%E7%BE%8E%E9%A3%9F%E7%8D%B5%E4%BA%BA1-2-1.jpg"
    },
    "receive_time": "2022-09-19T17:39:38.352019+08:00",
    "coupons": [],
    "rights": []
  },
  {
    "skin": {
      "id": "44b306a9-7e68-44a6-91b2-7391e3b652d9",
      "name": "Foodie Hunter#2",
      "description": "Foodie Hunter#2",
      "img": "https://foodieverse.s3.s3.amazonaws.com/static/NFT-%E7%BE%8E%E9%A3%9F%E7%8D%B5%E4%BA%BA1-3-1.jpg"
    },
    "receive_time": "2022-09-19T17:39:45.979888+08:00",
    "coupons": [],
    "rights": []
  }
]