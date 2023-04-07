export interface IState<T> {
    value: T[];
    error: string | null;
    loading: boolean;
    actionText: string | null;
}