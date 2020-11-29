import { UserIdentity } from './useridentity';
import { Vehicle } from './vehicle';
export class UserModel {
  constructor(
    public identifier,
    public identity: UserIdentity,
    public job,
    public job_grade: number,
    public bank_money: number,
    public phone_number,
    public licenses: Record<string, string>,
    public phone_calls: Array<string>, // aunque quizá sea un record también
    public validated: boolean,
    public house_id: number,
    public vehicles: Vehicle
  ) {}
}
// HACER CLASE DE VEHICULOS Y DE IDENTITY
