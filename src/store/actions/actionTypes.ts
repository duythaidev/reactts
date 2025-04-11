export const INCREMENT: string = 'INCREMENT';

export const DECREMENT: string = 'DECREMENT';

export const SAVE_ACCOUNT: string = 'SAVE_ACCOUNT';

export const DELETE_ACCOUNT: string = 'DELETE_ACCOUNT';

export interface ActionTypes {
    type: typeof INCREMENT | typeof DECREMENT
}