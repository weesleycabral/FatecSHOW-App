import { Disciplinas } from './Disciplinas';

export interface IPeriod {
    startAt: Date;
    endAt: Date;
    discipline: Disciplinas;
}