
export enum TabId {
  ORIENTACOES = 'orientacoes',
  DIA02 = 'dia02',
  DIA03 = 'dia03',
  DIA04 = 'dia04',
  SERTAO = 'sertao',
  PALESTRANTES = 'palestrantes'
}

export interface Speaker {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  location?: string;
}

export interface WednesdayTrack {
  room: string;
  theme: string;
  items: ScheduleItem[];
}