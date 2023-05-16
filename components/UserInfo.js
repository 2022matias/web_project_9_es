import {
  profileName,
  profileSkill,
  profileAvatar,
} from "../utils/constants.js";

export class UserInfo {
  constructor(name, job, avatar) {
    this._name = name;
    this._skill = job;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._skill.textContent,
      avatar: this._avatar.src,
    };
  }

  setUserInfo(newName, newJob, newAvatar) {
    profileName.textContent = newName;
    profileSkill.textContent = newJob;
    profileAvatar.src = newAvatar;
  }
}

export const userInfo = new UserInfo(profileName, profileSkill, profileAvatar);