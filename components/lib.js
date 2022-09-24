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


export let Reward_Data