import { Injectable } from "@angular/core";
import { UserRepository } from "./user.repository.service";
import { FileRepository } from "./file.repository.service";

@Injectable()
export class AppRepository {
  constructor(
    private fileRepository: FileRepository,
    private userRepository: UserRepository
  ) {}
  get File(): FileRepository {
    return this.fileRepository;
  }
  get User(): UserRepository {
    return this.userRepository;
  }
}
