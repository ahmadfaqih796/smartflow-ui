export type Result<T = any> = {
   status: number;
   message: string;
   data?: T;
 }
 