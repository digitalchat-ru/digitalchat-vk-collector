import { SexEnum } from "../enums/SexEnum";

export declare interface VkUser {
  id: number;
  firstName: string;
  lastName: string;
  sex: SexEnum;
  birthday: string;
}
