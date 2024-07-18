import {ISelectOption} from "redux-store/api";

export const formatOption = <GObject, GIdField extends keyof GObject, GNameField extends keyof GObject>(object: GObject, idField: GIdField, nameField: GNameField): ISelectOption => {
    const id = object[idField] as string || '';
    const name = object[nameField] as string || '';

    return {id, name}
}
export const createOption = (id: string | number, name: string): ISelectOption => {

    return {id, name}
}