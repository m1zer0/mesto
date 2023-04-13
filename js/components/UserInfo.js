export default class UserInfo {
  constructor( { elemName, elemInfo, elemAvatar } ) {
    this._userName = document.querySelector(elemName);
    this._userInfo = document.querySelector(elemInfo);
    this._elemAvatar = document.querySelector(elemAvatar);
  }

  getUserInfo = () => {
    return {'name': this._userName.textContent, 'info': this._userInfo.textContent};
  }

  setUserInfo = ({name, info, avatar}) => {
    this._userName.textContent = name;
    this._userInfo.textContent = info;
    this._elemAvatar.src = avatar;
  }
}