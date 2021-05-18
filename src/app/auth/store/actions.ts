import { createAction, props } from "@ngrx/store";
import { RegisterRequestUserInterface } from "../types/regiseterRequest.interface";
import { ActionTypes } from "./actionTypes";

export const registerAction = createAction(
    ActionTypes.REGISTER,props<{request : RegisterRequestUserInterface}>()
)