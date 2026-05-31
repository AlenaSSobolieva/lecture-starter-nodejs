import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  getAll() {
    return userRepository.getAll();
  }

  getOne(id) {
    const user = userRepository.getOne({ id });

    if (!user) {
      throw Error("User not found");
    }

    return user;
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  create(userData) {
    const { email, phone } = userData;

    const existingEmail = userRepository.getOne({ email });
    const existingPhone = userRepository.getOne({ phone });

    if (existingEmail) {
      throw Error("User with this email already exists");
    }

    if (existingPhone) {
      throw Error("User with this phone already exists");
    }
    return userRepository.create(userData);
  }

  update(id, userData) {
    const user = this.getOne(id);
    const { email, phone } = userData;

    if (email) {
      const existingEmail = userRepository.getOne({ email });

      if (existingEmail && existingEmail.id !== user.id) {
        throw Error("User with this email already exists");
      }
    }

    if (phone) {
      const existingPhone = userRepository.getOne({ phone });

      if (existingPhone && existingPhone.id !== user.id) {
        throw Error("User with this phone already exists");
      }
    }

    return userRepository.update(id, userData);
  }

  delete(id) {
    this.getOne(id);
    
    return userRepository.delete(id);
  }
}

const userService = new UserService();

export { userService };
