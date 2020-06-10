export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
  phoneNumber: string;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', type: 0, phoneNumber: "+79197242467" },
  { id: 2, name: 'Петр', surname: 'Петров', type: 1, phoneNumber: "+79353452135" },
  { id: 3, name: 'Сидр', surname: 'Сидоров', type: 2, phoneNumber: "+73452345632" },
  { id: 4, name: 'Василий', surname: 'Васильев', type: 3, phoneNumber: "+79456542345" },
];
