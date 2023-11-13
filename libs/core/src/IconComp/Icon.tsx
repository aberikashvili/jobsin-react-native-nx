import React from 'react';

import { Image, ImageSourcePropType, Pressable } from 'react-native';

type IconProps = {
  name: keyof typeof icons;
  onPress?: () => void;
};

export const icons: Record<string, ImageSourcePropType> = {
  aboutMe: require('../icons/aboutMe.png'),
  add: require('../icons/add.png'),
  appreciation: require('../icons/appreciation.png'),
  attachment: require('../icons/attachment.png'),
  back: require('../icons/back.png'),
  arrow: require('../icons/arrow.png'),
  call: require('../icons/call.png'),
  camera: require('../icons/camera.png'),
  chat: require('../icons/chat.png'),
  comments: require('../icons/comments.png'),
  connection: require('../icons/connection.png'),
  darkMode: require('../icons/darkMode.png'),
  delete: require('../icons/delete.png'),
  design: require('../icons/design.png'),
  done: require('../icons/done.png'),
  dot: require('../icons/dot.png'),
  edit: require('../icons/edit.png'),
  education: require('../icons/education.png'),
  education2: require('../icons/education2.png'),
  eyeIcon: require('../icons/eyeIcon.png'),
  filter: require('../icons/filter.png'),
  finance: require('../icons/finance.png'),
  google: require('../icons/google.png'),
  headhunting: require('../icons/headhunting.png'),
  health: require('../icons/health.png'),
  home: require('../icons/home.png'),
  language: require('../icons/language.png'),
  languageAddIcon: require('../icons/languageAddIcon.png'),
  location: require('../icons/location.png'),
  logout: require('../icons/logout.png'),
  notifications: require('../icons/notifications.png'),
  offNotifications: require('../icons/offNotifications.png'),
  options: require('../icons/options.png'),
  password: require('../icons/password.png'),
  pdf: require('../icons/pdf.png'),
  picture: require('../icons/picture.png'),
  programmer: require('../icons/programmer.png'),
  redDelete: require('../icons/redDelete.png'),
  redHeart: require('../icons/redHeart.png'),
  remove: require('../icons/remove.png'),
  restaurant: require('../icons/restaurant.png'),
  resume: require('../icons/resume.png'),
  save: require('../icons/save.png'),
  search: require('../icons/search.png'),
  orangeSearch: require('../icons/orangeSearch.png'),
  send: require('../icons/send.png'),
  settings: require('../icons/settings.png'),
  share: require('../icons/share.png'),
  skill: require('../icons/skill.png'),
  upArrow: require('../icons/upArrow.png'),
  uploadCv: require('../icons/uploadCv.png'),
  webNav: require('../icons/webNav.png'),
  work: require('../icons/work.png'),
  write: require('../icons/write.png'),
};

const Icon: React.FC<IconProps> = ({ name, onPress }) => {
  const icon = icons[name];

  if (!icon) {
    console.warn(`Icon "${name}" does not exist.`);

    return null;
  }

  return (
    <Pressable onPress={onPress}>
      <Image source={icon} />
    </Pressable>
  );
};

export default Icon;
