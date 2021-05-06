export const AppEntities: AppEntity[] = [
  {
    name: 'User',
    description: 'User has a login/password pair as authentication data.',
  },
  {
    name: 'Picture',
    description: 'The main purpose of the app is coloring pictures, so this entity is an array of colored cells.',
  },
  {
    name: 'Cell',
    description: 'This entity is a building block for pictures.',
  },
  {
    name: 'WorkingArea',
    description: 'Each user can configure his/her interface: change color theme, enable color blindness mode. This config is called working area.',
  }
];

export interface AppEntity {
  name: string;
  description: string;
}
