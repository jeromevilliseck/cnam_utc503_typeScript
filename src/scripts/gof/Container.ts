import {Iterator} from "./Iterator";

export interface Container{
    getIterator(borneSup: number): Iterator;
}