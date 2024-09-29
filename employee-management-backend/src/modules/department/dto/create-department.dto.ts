// src/department/dto/create-department.dto.ts
export class CreateDepartmentDto {
  readonly name: string;
}

// src/department/dto/update-department.dto.ts
export class UpdateDepartmentDto {
  readonly name?: string;
}
