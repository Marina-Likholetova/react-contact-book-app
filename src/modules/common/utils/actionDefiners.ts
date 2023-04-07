import { AnyAction } from "@reduxjs/toolkit";

export function isError(action: AnyAction): boolean {
    return action.type.endsWith('rejected')
}

export function isPendind(action: AnyAction): boolean {
    return action.type.endsWith('pending')
}