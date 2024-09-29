// src/employee/dto/create-employee.dto.ts
export class CreateEmployeeDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly departmentId: string;
  readonly salaryId: string;
  readonly avatarUrl?: string;
}
export class LoginDto {
  email: string;
  password: string;
}
