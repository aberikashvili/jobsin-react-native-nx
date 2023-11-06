import React from 'react';

import { Image, ImageSourcePropType } from 'react-native';

type IconProps = {
  name: keyof typeof icons;
};

export const icons: Record<string, ImageSourcePropType> = {
  aboutMe: require('../../assets/icons/aboutMe.png'),
  add: require('../../assets/icons/add.png'),
  appreciation: require('../../assets/icons/appreciation.png'),
  attachment: require('../../assets/icons/attachment.png'),
  back: require('../../assets/icons/back.png'),
  arrow: require('../../assets/icons/arrow.png'),
  call: require('../../assets/icons/call.png'),
  camera: require('../../assets/icons/camera.png'),
  chat: require('../../assets/icons/chat.png'),
  comments: require('../../assets/icons/comments.png'),
  connection: require('../../assets/icons/connection.png'),
  darkMode: require('../../assets/icons/darkMode.png'),
  delete: require('../../assets/icons/delete.png'),
  design: require('../../assets/icons/design.png'),
  done: require('../../assets/icons/done.png'),
  dot: require('../../assets/icons/dot.png'),
  edit: require('../../assets/icons/edit.png'),
  education: require('../../assets/icons/education.png'),
  education2: require('../../assets/icons/education2.png'),
  eyeIcon: require('../../assets/icons/eyeIcon.png'),
  filter: require('../../assets/icons/filter.png'),
  finance: require('../../assets/icons/finance.png'),
  google: require('../../assets/icons/google.png'),
  headhunting: require('../../assets/icons/headhunting.png'),
  health: require('../../assets/icons/health.png'),
  home: require('../../assets/icons/home.png'),
  language: require('../../assets/icons/language.png'),
  languageAddIcon: require('../../assets/icons/languageAddIcon.png'),
  location: require('../../assets/icons/location.png'),
  logout: require('../../assets/icons/logout.png'),
  notifications: require('../../assets/icons/notifications.png'),
  offNotifications: require('../../assets/icons/offNotifications.png'),
  options: require('../../assets/icons/options.png'),
  password: require('../../assets/icons/password.png'),
  pdf: require('../../assets/icons/pdf.png'),
  picture: require('../../assets/icons/picture.png'),
  programmer: require('../../assets/icons/programmer.png'),
  redDelete: require('../../assets/icons/redDelete.png'),
  redHeart: require('../../assets/icons/redHeart.png'),
  remove: require('../../assets/icons/remove.png'),
  restaurant: require('../../assets/icons/restaurant.png'),
  resume: require('../../assets/icons/resume.png'),
  save: require('../../assets/icons/save.png'),
  search: require('../../assets/icons/search.png'),
  orangeSearch: require('../../assets/icons/orangeSearch.png'),
  send: require('../../assets/icons/send.png'),
  settings: require('../../assets/icons/settings.png'),
  share: require('../../assets/icons/share.png'),
  skill: require('../../assets/icons/skill.png'),
  upArrow: require('../../assets/icons/upArrow.png'),
  uploadCv: require('../../assets/icons/uploadCv.png'),
  webNav: require('../../assets/icons/webNav.png'),
  work: require('../../assets/icons/work.png'),
  write: require('../../assets/icons/write.png'),
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const icon = icons[name];

  if (!icon) {
    console.warn(`Icon "${name}" does not exist.`);

    return null;
  }

  return <Image source={icon} />;
};

export default Icon;
